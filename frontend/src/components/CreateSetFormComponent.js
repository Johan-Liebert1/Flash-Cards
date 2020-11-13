import React, { useState } from 'react'

import '../styles/CreateSetFormComponentStyles.css'

const CreateSetFormComponent = () => {

    const [setName, setSetName] = useState('')
    const [data, setData] = useState('')
    const [seperator, setSeperator] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        let cardData = []

        let splitted_data = data.split('\n')
        
        for (let i = 0; i < splitted_data.length; i++) {
            const [question, answer] = splitted_data[i].split(seperator)

            cardData.push({
                question : question.trim(), answer : answer.trim()
            })
            
        }

        console.log(cardData)

    }

    return (
        <div className = 'container mt-5'>
            <form onSubmit = {submitHandler}>
                <div className = 'form-row mb-4'>

                    <div className="form-group col-md-4">
                        <label htmlFor="setName">Enter a unique Set Name</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="setName" 
                            placeholder="Set Name" 
                            value = {setName}
                            onChange = { (e) => setSetName(e.target.value) }
                            style = {{ backgroundColor : 'transparent', color: 'white' }}
                            required
                        />
                    </div>

                </div>

                <div className = 'form-row mb-4'>

                    <div className="form-group col-md-8">
                        <label htmlFor="content">Question and Answers Seperated By a Symbol</label>
                        <textarea 
                            class="form-control" 
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
                            class="form-control" 
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

export default CreateSetFormComponent
