import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLogoutAction } from '../actions/userActions'

import '../styles/MobileNavbarComponentStyles.css'

const MobileNavbarComponent = ({ history, match, homeNavbar }) => {
    const dispatch = useDispatch()

    const { userLoginInfo } = useSelector(state => state.userLoginInfo)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    const triggerModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const logoutUserHandler = () => {
        dispatch(userLogoutAction())

        history.push('/')
    }

    return (
        <nav className = 'container'>

            <div className = 'hamburger' onClick = {() => setSideMenuOpen(true)}>
                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>

            <div>

                <Link 
                    to = '/cardsets' 
                    className = {`home-link`}
                >
                    <h5>Flash Cards</h5>
                </Link>

            </div>

            <div className = 'user-profile'>
                <div className = 'profile' onClick = {triggerModal}>

                    <span> {userLoginInfo ? userLoginInfo.username : ''} </span>
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

            {sideMenuOpen &&
                <div id = 'side-menu'>

                    <div id = 'left-side-menu'>
                        <div id = 'close-sidebar' onClick = {() => setSideMenuOpen(false)}> X </div>

                        <div id = 'left-side-menu-container'>
                            <div>
                                <Link to = '/cardsets'>
                                    <h3>Flash Cards</h3>
                                </Link>
                            </div>

                            <div className = 'm-link-container'>
                                <Link 
                                    to = '/cardsets/create' 
                                    className = {
                                        `m-nav-link 
                                        ${match.url === '/cardsets/create' ? 'm-link-active' : '' }`
                                    }
                                >
                                    <h6> Create a New Set </h6>
                                </Link>
                            </div>

                            {!homeNavbar &&
                                <>
                                <div className = 'm-link-container'>
                                    <Link 
                                        to = {`/cardsets/${match.params.setName}/${match.params.setId}/cards/add`} 

                                        className = {
                                            `m-nav-link 
                                            ${match.url === `/cardsets/${match.params.setName}/${match.params.setId}/cards/add` ? 'm-link-active' : '' }`
                                        }
                                    >
                                        <h6> Add Cards </h6>
                                    </Link>
                                </div>

                                <div className = 'm-link-container'>
                                    <Link 
                                        to = {`/cardsets/${match.params.setName}/${match.params.setId}/cards/edit`} 
                                        className = {
                                            `m-nav-link 
                                            ${match.url === `/cardsets/${match.params.setName}/${match.params.setId}/cards/edit` ? 'm-link-active' : '' }`
                                        }
                                    >
                                        <h6> Edit Cards </h6>
                                    </Link>
                                </div>

                                </>
                            }
                        </div>
                    </div>
                    
                    <div id = 'right-side-menu'>
                    </div>

                </div>
            }

        </nav>
    )
}

export default withRouter(MobileNavbarComponent)
