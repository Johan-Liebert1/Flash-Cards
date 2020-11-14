export const cardsReducers = (state = {}, action) => {
    switch (action.type) {
        case 'CARDS_FROM_SET_REQUEST':
            return { loading : true }

        case 'CARDS_FROM_SET_SUCCESS':
            return { loading : false, cards : action.payload }
        
        case 'CARDS_FROM_SET_FAIL':
            return { loading : false, error: action.payload }

        case 'DELETE_CARDS_FROM_STATE':
            return {}

        case 'EDIT_CARD_REQUEST':
            return { loading: true, cards: state.cards }       
        
        case 'EDIT_CARD_SUCCESS':
            const editedCards = state.cards.map(card => {
                if (card._id === action.payload.cardId) {
                    card.question = action.payload.question
                    card.answer = action.payload.answer
                }
                return card
            })
            return { loading: false, cards: editedCards }

        case 'DELETE_CARD_REQUEST':
            return { loading: true, cards: state.cards }

        case 'DELETE_CARD_SUCCESS':
            const filteredCards = state.cards.filter(card => card._id !== action.payload.cardId)
            return { loading: false, cards: filteredCards }


        default:
            return state
    }
}