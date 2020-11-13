import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCardSets } from '../actions/cardSetActions'
import CardSetDisplayComponent from '../components/CardSetDisplayComponent'


import NavbarComponent from '../components/NavbarComponent'

const CardSetsScreen = () => {

    const { userLoginInfo } = useSelector(state => state.userLoginInfo)
    const { cardSets } = useSelector(state => state.cardSets)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( getAllCardSets(userLoginInfo.token) )    
    }, [dispatch, userLoginInfo])

    return (
        <div>
            <NavbarComponent homeNavbar />
            <div className = 'container'>
                <div className = 'row'>
                    {   cardSets && 
                        cardSets.map(
                            (set, index) => 
                            <CardSetDisplayComponent 
                                index={index + 1} 
                                key={set._id} 
                                cardSet={set}
                                setId = {set._id}
                                setName = {set.setName}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default CardSetsScreen
