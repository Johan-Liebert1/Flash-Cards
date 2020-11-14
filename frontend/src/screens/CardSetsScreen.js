import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCardSets } from '../actions/cardSetActions'
import CardSetDisplayComponent from '../components/CardSetDisplayComponent'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import NavbarComponent from '../components/NavbarComponent'
import '../styles/AnimationStyles.css'

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
                <TransitionGroup className = 'row' >
                    {   cardSets && 
                        cardSets.map(
                            (set, index) => 
                            <CSSTransition key = {set._id} classNames = 'fade' timeout = {700}>
                                <CardSetDisplayComponent 
                                    index={index + 1} 
                                    key={set._id} 
                                    cardSet={set}
                                    setId = {set._id}
                                    setName = {set.setName}
                                />
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </div>

        </div>
    )
}

export default CardSetsScreen
