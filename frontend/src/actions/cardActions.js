import axios from 'axios'


export const addCardsToSet = (userToken, setId, cardsList) => async (dispatch) => {
    try {
        

        dispatch({ type : 'ADD_CARDS_TO_SET_REQUEST' })

        const config = {
            'Content-Type' : "application/json",
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = axios.post(
                            `/api/cardsets/${setId}/cards`, 
                            {cards : cardsList},
                            config
                        )
        
        console.log('cards post data = ', data)

        dispatch({
            type: 'ADD_CARDS_TO_SET_SUCCESS',
            payload: data
        })

    }

    catch (error) {
        dispatch({
            type: 'ADD_CARDS_TO_SET_FAIL',
            payload: error
        })
    }
}