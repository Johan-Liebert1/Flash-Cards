import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

import '../styles/FlashCardsComponentStyles.css'

const FlashCardsComponent = ({ question, answer, index }) => {
    const [isFlipped, setIsFlipped] = useState(true)

    return (
        <div className = 'card-row'>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

        <div className = 'row'>
            <div
                className = {
                    `flash-card-container col-md-5 col-10`
                }

                onClick = {() => setIsFlipped(!isFlipped)}
            >
                <div id = 'index'>
                    <h1> {index > 9 ? index : `0${index}`} </h1>
                </div>

                <div id = 'content'>
                    <h3> {answer} </h3>
                </div>
            </div>
        </div>

        <div className = 'row'>

            <div 
                className = {
                    `flash-card-container col-md-5 col-10`
                }
                onClick = {() => setIsFlipped(!isFlipped)}
            >
                <div id = 'index'>
                    <h1> {index > 9 ? index : `0${index}`} </h1>
                </div>

                <div id = 'content'>
                    <h3> {question} </h3>
                </div>
            </div>
            
        </div>
        </ReactCardFlip>
        </div>
    )
}

export default FlashCardsComponent
