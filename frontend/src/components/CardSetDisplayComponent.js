import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCardsFromSet } from '../actions/cardActions'
import { withRouter } from 'react-router-dom'

import '../styles/CardSetDisplayComponentStyles.css'

const CardSetDisplayComponent = ({ index, cardSet, setId, setName, history }) => {
    const dispatch = useDispatch()
    const { userLoginInfo } = useSelector(state => state.userLoginInfo)
    const { cards } = useSelector(state => state.cards)

    const redirectToCards = () => {
        dispatch( getCardsFromSet(userLoginInfo.token, setId) )    
    }

    useEffect(() => {
        if (cards) {
            history.push(`/cardsets/${setName}/cards`)
        }
    }, [cards] )

    return (
        <>
        <div className = 'card-container col-md-3' onClick = {redirectToCards}>
            <div id = 'index'>
                <h1> {index > 9 ? index : `0${index}`} </h1>
            </div>

            <div id = 'content'>
                <h3> {cardSet.setName} </h3>
                <p> {cardSet.cards.length} Cards in this set </p>
            </div>

            <div id = 'icons'>
                <svg id = 'edit' width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>

                <svg id='delete' width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>

            </div>

        </div>
        <div className = 'col-md-1'></div>
        </>
    )
}

export default withRouter(CardSetDisplayComponent)
