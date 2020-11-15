import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import '../styles/NavbarComponentStyles.css'
import { userLogoutAction } from '../actions/userActions'

const NavbarComponent = ({ history, location, match, homeNavbar }) => {
    const dispatch = useDispatch()
    const { userLoginInfo } = useSelector(state => state.userLoginInfo)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const triggerModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const logoutUserHandler = () => {
        dispatch(userLogoutAction())

        history.push('/')
    }

    return (
        <nav className = 'container-new'>
            <div>
                <Link to = '/cardsets' className = 'logo'>
                    <h1>Flash Cards</h1>
                </Link>
            </div>

            <div id = 'other-links'>
                <div >
                    <Link 
                        to = '/cardsets/create' 
                        className = {
                            `nav-link 
                            ${match.url === '/cardsets/create' ? 'nav-link-active' : '' }`
                        }
                    >
                        <span> Create a New Set </span>
                    </Link>
                </div>

                {!homeNavbar &&
                    <>
                    <div >
                        <Link 
                            to = {`/cardsets/${match.params.setName}/${match.params.setId}/cards/add`} 
                            className = {
                                `nav-link 
                                ${match.url === `/cardsets/${match.params.setName}/${match.params.setId}/cards/add` ? 'nav-link-active' : '' }`
                            }
                        >
                            <span> Add Cards </span>
                        </Link>
                    </div>

                    <div >
                        <Link 
                            to = {`/cardsets/${match.params.setName}/${match.params.setId}/cards/edit`} 
                            className = {
                                `nav-link 
                                ${match.url === `/cardsets/${match.params.setName}/${match.params.setId}/cards/edit` ? 'nav-link-active' : '' }`
                            }
                        >
                            <span> Edit Cards </span>
                        </Link>
                    </div>

                    </>
                }
                </div>

                <div className = 'profile-container' >
                    <div className = 'profile' onClick = {triggerModal}>

                        <span> Welcome, {userLoginInfo ? userLoginInfo.username : ''} </span>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                        </svg>

                    </div>

                    {isModalOpen && 
                        <div className = 'user-profile-modal'>
                            <p className = 'profile-link'>Profile</p>
                            <p className = 'profile-link' onClick = {logoutUserHandler}>Logout</p>
                        </div>
                    }
                </div>

        </nav>
    )
}

export default withRouter(NavbarComponent)
