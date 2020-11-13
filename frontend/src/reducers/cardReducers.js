export const cardsReducers = (state = {}, action) => {
    switch (action.type) {
        case 'CARDS_FROM_SET_REQUEST':
            return { loading : true }

        case 'CARDS_FROM_SET_SUCCESS':
            return { loading : false, cards : action.payload }
        
        case 'CARDS_FROM_SET_FAIL':
            return { loading : false, error: action.payload }


        default:
            return state
    }
}