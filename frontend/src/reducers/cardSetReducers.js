export const cardSetReducers = (state = {}, action) => {
    switch (action.type) {
        case 'ALL_CARDSETS_REQUEST':
            return { loading: true }

        case 'ALL_CARDSETS_SUCCESS':
            let to_return =  { loading: false, cardSets : action.payload }
            console.log(to_return)
            return to_return

        case 'ALL_CARDSETS_FAIL':
            return { loading: false, error : action.payload }
        
        case 'CREATE_CARDSET_REQUEST':
            // console.log(state)
            let to_return3 =  { loading: true, cardSets : state.cardSets }
            return to_return3

        case 'CREATE_CARDSET_SUCCESS':
            // action.payload is the data retured by the post request
            // payload is the new set created
            let to_return2 = { loading: false, cardSets : [ ...state.cardSets , action.payload ] }
            return to_return2

        case 'CREATE_CARDSET_FAIL':
            return { loading: false, error : action.payload }


        default:
            return state
    }
}