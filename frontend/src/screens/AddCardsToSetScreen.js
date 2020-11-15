import React from 'react'
import { Link } from 'react-router-dom'
import CreateSetFormComponent from '../components/CreateSetFormComponent'
import MobileNavbarComponent from '../components/MobileNavbarComponent'
import NavbarComponent from '../components/NavbarComponent'

const AddCardsToSetScreen = ({ match }) => {
    const smallWindow = window.innerWidth < 900

    return (
        <div>
            {smallWindow ? <MobileNavbarComponent/> :
                <NavbarComponent />
            }
            <div className = 'container mt-3'>

                <Link 
                    to = {`/cardsets/${match.params.setName}/${match.params.setId}/cards`}
                >
                    {'< Go To Cards'}
                </Link>

            </div>
            <CreateSetFormComponent />
        </div>
    )
}

export default AddCardsToSetScreen
