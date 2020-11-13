export const cardSetReducers = (state = {}, action) => {
    switch (action.type) {
        case 'ALL_CARDSETS_REQUEST':
            return { loading: true }

        case 'ALL_CARDSETS_SUCCESS':
            return { loading: false, cardSets : action.payload }

        case 'ALL_CARDSETS_FAIL':
            return { loading: false, error : action.payload }

        default:
            return state
    }
}