import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCardSets } from '../actions/cardSetActions'
import CardSetDisplayComponent from '../components/CardSetDisplayComponent'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import NavbarComponent from '../components/NavbarComponent'
import '../styles/AnimationStyles.css'
import MobileNavbarComponent from '../components/MobileNavbarComponent'

const CardSetsScreen = () => {

    const { userLoginInfo } = useSelector(state => state.userLoginInfo)
    const { cardSets } = useSelector(state => state.cardSets)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch( getAllCardSets(userLoginInfo.token) )  

    }, [dispatch, userLoginInfo])

    const smallWindow = window.innerWidth < 900

    return (
        <div>
            {smallWindow ? <MobileNavbarComponent homeNavbar/> :
                <NavbarComponent homeNavbar />
            }
            <div className = 'container mt-3'>
                <h2 
                    style = {{ textAlign: 'center', color: 'rgb(200, 200, 200)' }}
                >Card Sets for - {userLoginInfo.username}</h2>
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
