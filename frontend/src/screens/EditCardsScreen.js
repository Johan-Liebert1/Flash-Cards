import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditCardsComponent from '../components/EditCardsComponent'
import NavbarComponent from '../components/NavbarComponent'

const EditCardsScreen = ({ match }) => {
    const { cards } = useSelector(state => state.cards)

    return (
        <div>
            <NavbarComponent />

            <div className = 'container mt-4'>

                <Link 
                    to = {`/cardsets/${match.params.setName}/${match.params.setId}/cards`}
                >
                    {'< Go To Cards'}
                </Link>

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
