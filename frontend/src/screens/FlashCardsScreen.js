import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FlashCardsComponent from '../components/FlashCardsComponent'
import NavbarComponent from '../components/NavbarComponent'

import '../styles/FlashCardsScreenStyles.css'

const FlashCardsScreen = () => {
    const { cards } = useSelector(state => state.cards)

    const [index, setIndex] = useState(0)

    const addToIndex = () => {
        index + 1 > cards.length - 1 ? setIndex(0) : setIndex(index + 1)
    }

    const subtractFromIndex = () => {
        index - 1 < 0 ? setIndex(cards.length - 1) : setIndex(index - 1)
    }

    return (
        <div>
            <NavbarComponent />
            <div className = 'container mt-3 '>
                { cards ? cards.length === 0 ? <h1>This set does not have any cards</h1> :
                <div className = 'card-btn-container'>

                    <div className = 'row card-row'>
                        <FlashCardsComponent 
                            question = {cards[index].question}
                            answer = {cards[index].answer}
                            index = {index + 1}
                        />
                    </div>

                    <div id = 'buttons-and-index'>
                        <div
                            onClick = {subtractFromIndex} 
                        >
                            <svg id = 'left-arrow' width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                        </div>

                        <div>
                            { index + 1} / { cards.length }
                        </div>

                        <div
                            onClick = {addToIndex}
                        >
                            <svg id='right-arrow' width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </div>
                    </div>
                </div> :
                // cards doesn't exist
                <h1>No Cards Found</h1>
                }
            </div>
        </div>
    )
}

export default FlashCardsScreen
