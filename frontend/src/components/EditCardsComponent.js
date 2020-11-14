import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCardAction, editCardAction } from '../actions/cardActions'

import '../styles/EditCardsComponentStyles.css'

const EditCardsComponent = ({ question, answer, cardId, match }) => {
    const { userLoginInfo } = useSelector(state => state.userLoginInfo)
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)
    const [newQuestion, setNewQuestion] = useState(question)
    const [newAnswer, setNewAnswer] = useState(answer)

    const inputStyle = {
        backgroundColor: 'transparent', 
        border: 'none', 
        borderRadius: '0px',
        borderBottom: '2px solid white',
        outline: 'none',
        color: 'white'
    }

    const editCard = (e) => {
        e.preventDefault()
        setIsEditing(!isEditing)
        dispatch( editCardAction(userLoginInfo.token, newQuestion, newAnswer, cardId, match.params.setId) )
    }

    const deleteCard = (e) => {
        e.preventDefault()
        dispatch( deleteCardAction(userLoginInfo.token, cardId, match.params.setId) )
    }

    return (
        <div className = 'edit-flash-card-container col-md-8 col-10'>
            <div className = 'q-a-container'>
            <div className = 'question-answer'>
                <h4 className = 'q-a'>Term</h4>
                {
                    !isEditing ? <p>{question}</p> : 
                    <input 
                        className = 'form-control' 
                        type = 'text' 
                        value = {newQuestion}
                        onChange = {e => setNewQuestion(e.target.value)}
                        style = {inputStyle}
                    /> 
                }
            </div>

            <div className = 'question-answer'>
                <h4 className = 'q-a'>Definition</h4>
                {
                    !isEditing ? <p>{answer}</p> : 
                    <input 
                        className = 'form-control' 
                        type = 'text' 
                        value = {newAnswer}
                        onChange = {e => setNewAnswer(e.target.value)} 
                        style = {inputStyle}
                    /> 
                }
            </div>
            </div>

            <div id = 'buttons'>
                <div onClick = { () => setIsEditing(!isEditing) }>
                { isEditing ? 
                    <button 
                        className = 'btn btn-sm btn-outline-warning'
                        onClick = {editCard}
                    >Save</button> :

                    <svg id = 'edit' width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                }
                </div>

                <div onClick = {deleteCard} >
                    <svg id='delete' width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                </div>
            </div>
        </div>
    )

}

export default withRouter(EditCardsComponent)
