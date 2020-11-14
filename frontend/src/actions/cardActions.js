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


export const getCardsFromSet = (userToken, setId) => async (dispatch) => {
    try {
        console.log('getcardsfromse')
        dispatch({ type: 'CARDS_FROM_SET_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.get(`/api/cardsets/${setId}/cards`, config)

        dispatch({
            type: 'CARDS_FROM_SET_SUCCESS',
            payload: data
        })

    }

    catch (error) {
        dispatch({
            type: 'CARDS_FROM_SET_FAIL',
            payload: error
        })
    }
}


export const editCardAction = (userToken, question, answer, cardId, setId) => async (dispatch) => {
    try {
        dispatch({ type: 'EDIT_CARD_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            },

            'Content-Type' : 'application/json'
        }

        await axios.put(`/api/cards/${cardId}`, {question, answer} ,config)

        dispatch({
            type: 'EDIT_CARD_SUCCESS'
        })

        await dispatch( getCardsFromSet(userToken, setId) )

    }

    catch (error) {
        dispatch({
            type: 'EDIT_CARD_FAIL',
            payload: error
        })
    }
}


export const deleteCardAction = (userToken, cardId, setId) => async (dispatch) => {
    try {
        dispatch({ type: 'DELETE_CARD_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }      
        }

        const {data} = await axios.delete(`/api/cardsets/${setId}/card/${cardId}`, config)

        dispatch({
            type: 'DELETE_CARD_SUCCESS',
            payload: cardId
        })
    }

    catch (error) {
        dispatch({
            type: 'DELETE_CARD_FAIL',
            payload: error
        })
    }
}


export const removeCardsFromState = () => (dispatch) => {
    dispatch({ type: 'DELETE_CARDS_FROM_STATE' })
}