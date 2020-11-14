import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditCardsComponent from '../components/EditCardsComponent'
import NavbarComponent from '../components/NavbarComponent'

const EditCardsScreen = () => {
    const { cards } = useSelector(state => state.cards)

    return (
        <div>
            <NavbarComponent />
            <div className = 'container mt-4'>
                <div className = 'row'>
                { !cards ? <h1>Nothing to edit as there are no cards in this set</h1>:

                    cards.map(card => 
                        <EditCardsComponent
                            question = {card.question}
                            answer = { card.answer }
                            key = {card._id}
                            cardId = {card._id}
                        />
                        )
                }
                </div>
            </div>
        </div>
    )
}

export default EditCardsScreen
