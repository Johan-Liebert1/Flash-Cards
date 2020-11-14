import React from 'react'
import CreateSetFormComponent from '../components/CreateSetFormComponent'
import NavbarComponent from '../components/NavbarComponent'

const CreateSetScreen = () => {
    return (
        <div>
            <NavbarComponent homeNavbar />
            <CreateSetFormComponent isCreatingSet />
        </div>
    )
}

export default CreateSetScreen
