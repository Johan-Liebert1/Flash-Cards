import React from 'react'
import CreateSetFormComponent from '../components/CreateSetFormComponent'
import MobileNavbarComponent from '../components/MobileNavbarComponent'
import NavbarComponent from '../components/NavbarComponent'

const CreateSetScreen = () => {
    const smallWindow = window.innerWidth < 900

    return (
        <div>
            {smallWindow ? <MobileNavbarComponent homeNavbar/> :
                <NavbarComponent homeNavbar />
            }
            <CreateSetFormComponent isCreatingSet />
        </div>
    )
}

export default CreateSetScreen
