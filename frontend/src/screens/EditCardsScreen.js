import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditCardsComponent from '../components/EditCardsComponent'
import NavbarComponent from '../components/NavbarComponent'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import '../styles/AnimationStyles.css'

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

                <TransitionGroup className = 'row'>
                { !cards ? <h1>Nothing to edit as there are no cards in this set</h1>:

                    cards.map(card => 
                        <CSSTransition key = {card._id} classNames = 'fade' timeout = {700}>
                            <EditCardsComponent
                                question = {card.question}
                                answer = { card.answer }
                                key = {card._id}
                                cardId = {card._id}
                            />
                        </CSSTransition>
                        )
                }
                </TransitionGroup>
            </div>
        </div>
    )
}

export default EditCardsScreen
