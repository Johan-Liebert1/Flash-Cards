import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCardsToSet } from '../actions/cardActions'
import { createNewCardSet } from '../actions/cardSetActions'

import '../styles/CreateSetFormComponentStyles.css'

const CreateSetFormComponent = ({ isCreatingSet, match }) => {
    const dispatch = useDispatch()
    const { userLoginInfo } = useSelector(state => state.userLoginInfo)

    const [setName, setSetName] = useState('')
    const [data, setData] = useState('')
    const [seperator, setSeperator] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        let cardsList = []

        let splitted_data = data.split('\n')
        
        for (let i = 0; i < splitted_data.length; i++) {
            const [question, answer] = splitted_data[i].split(seperator)

            cardsList.push({
                question : question.trim(), answer : answer.trim()
            })

        }

        if (isCreatingSet){
            dispatch(createNewCardSet(userLoginInfo.token, setName, cardsList))
        }

        else {
            // just adding cards to the set
            dispatch(addCardsToSet(userLoginInfo.token, match.params.setId, cardsList))
        }

    }

    return (
        <div className = 'container mt-5'>
            <form onSubmit = {submitHandler}>
                { isCreatingSet &&
                    <div className = 'form-row mb-4'>

                        <div className="form-group col-md-4">
                            <label htmlFor="setName">Enter a unique Set Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="setName" 
                                placeholder="Set Name" 
                                value = {setName}
                                onChange = { (e) => setSetName(e.target.value) }
                                style = {{ backgroundColor : 'transparent', color: 'white' }}
                                required
                            />
                        </div>

                    </div>
                }

                <div className = 'form-row mb-4'>

                    <div className="form-group col-md-8">
                        <label htmlFor="content">Question and Answers Seperated By a Symbol</label>
                        <textarea 
                            className="form-control" 
                            id="contenet" 
                            placeholder="Question and Answers Seperated By a Symbol"
                            value = {data}
                            onChange = { (e) => setData(e.target.value) }
                            rows = "7"
                            style = {{ backgroundColor : 'transparent', color: 'white' }}
                            required
                        >
                        </textarea>
                    </div>

                </div>

                <div className = 'form-row mb-4'>

                    <div className="form-group col-md-4">
                        <label htmlFor="seperator">Seperator</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="seperator" 
                            placeholder="Seperator" 
                            value = {seperator}
                            onChange = { (e) => setSeperator(e.target.value) }
                            style = {{ backgroundColor : 'transparent', color: 'white' }}
                            required
                        />
                    </div>

                </div>
                <button className = 'btn btn-outline-primary'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default withRouter(CreateSetFormComponent)
