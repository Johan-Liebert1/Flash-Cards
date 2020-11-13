import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCardSets } from '../actions/cardSetActions'


import NavbarComponent from '../components/NavbarComponent'

const CardSetsScreen = () => {
    const { userLogin } = useSelector(state => state.userLogin)
    const dispatch = useDispatch()

    useEffect(() => {
        if (userLogin)
            dispatch( getAllCardSets(userLogin.token) )    
    }, [dispatch, userLogin])

    return (
        <div>
            <NavbarComponent homeNavbar />
        </div>
    )
}

export default CardSetsScreen
