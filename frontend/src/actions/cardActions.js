import axios from 'axios'


export const addCardsToSet = (userToken, setId, cardsList) => async (dispatch, getState) => {
    try {

        await dispatch({ type : 'ADD_CARDS_TO_SET_REQUEST' })

        const config = {
            'Content-Type' : "application/json",
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.post(
                            `/api/cardsets/${setId}/cards`, 
                            {cards : cardsList},
                            config
                        )
        

        await dispatch({
            type: 'ADD_CARDS_TO_SET_SUCCESS',
            payload: data
        })

        await dispatch( getCardsFromSet(userToken, setId) )

        localStorage.setItem('cards', JSON.stringify(getState().cards))

    }

    catch (error) {
        dispatch({
            type: 'ADD_CARDS_TO_SET_FAIL',
            payload: error
        })
    }
}


export const getCardsFromSet = (userToken, setId) => async (dispatch, getState) => {
    try {
        await dispatch({ type: 'CARDS_FROM_SET_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.get(`/api/cardsets/${setId}/cards`, config)

        await dispatch({
            type: 'CARDS_FROM_SET_SUCCESS',
            payload: data
        })

        localStorage.setItem('cards', JSON.stringify(getState().cards))

    }

    catch (error) {
        await dispatch({
            type: 'CARDS_FROM_SET_FAIL',
            payload: error
        })
    }
}


export const editCardAction = (userToken, question, answer, cardId) => async (dispatch, getState) => {
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
            type: 'EDIT_CARD_SUCCESS',
            payload: { cardId, question, answer }
        })

        localStorage.setItem('cards', JSON.stringify(getState().cards))

    }

    catch (error) {
        dispatch({
            type: 'EDIT_CARD_FAIL',
            payload: error
        })
    }
}


export const deleteCardAction = (userToken, cardId, setId) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'DELETE_CARD_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }      
        }

        const {data} = await axios.delete(`/api/cardsets/${setId}/card/${cardId}`, config)

        // card deleted from database, now delete it from the state
        dispatch({
            type: 'DELETE_CARD_SUCCESS',
            payload: cardId
        })

        localStorage.setItem('cards', JSON.stringify(getState().cards))

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