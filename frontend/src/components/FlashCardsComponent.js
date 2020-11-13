import React from 'react'

import '../styles/FlashCardsComponentStyles.css'

const FlashCardsComponent = ({ question, answer, index }) => {
    return (
        <div className = 'flash-card-container col-md-5 col-10'>
            <div id = 'index'>
                <h1> {index > 9 ? index : `0${index}`} </h1>
            </div>

            <div id = 'content'>
                <h3> {question} </h3>
                <p> {answer} </p>
            </div>
        </div>
    )
}

export default FlashCardsComponent
