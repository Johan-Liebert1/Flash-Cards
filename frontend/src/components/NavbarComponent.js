import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import '../styles/NavbarComponentStyles.css'

const NavbarComponent = ({ history, location, match, homeNavbar }) => {
    const { userLogin } = useSelector(state => state.userLogin)

    // console.log('location =', location)
    // console.log('history =', history)
    // console.log('match =', match)

    return (
        <nav className = 'container-new'>
            <div>
                <Link to = '/' className = 'logo'>
                    <h1>Flash Cards</h1>
                </Link>
            </div>

            <div id = 'other-links'>
                <div >
                    <Link to = '/cardsets' className = 'nav-link'>
                        <span> Create a New Set </span>
                    </Link>
                </div>

                {!homeNavbar &&
                    <>
                    <div >
                        <Link to = '/cardsets' className = 'nav-link'>
                            <span> Add Cards </span>
                        </Link>
                    </div>

                    <div >
                        <Link to = '/cardsets' className = 'nav-link'>
                            <span> Edit Cards </span>
                        </Link>
                    </div>

                    <div >
                        <Link to = '/cardsets' className = 'nav-link'>
                            <span> Delete Cards </span>
                        </Link>
                    </div>
                    </>
                }
                </div>

                <div >
                    <Link to = '/cardsets' className = 'profile' >
                        <span> {userLogin ? userLogin.username : ''} </span>
                    </Link>
                </div>
        </nav>
    )
}

export default withRouter(NavbarComponent)
