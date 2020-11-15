import axios from 'axios'
import { addCardsToSet } from './cardActions'

export const getAllCardSets = (userToken) => async (dispatch, getState) => {
    try {
        await dispatch({ type: "ALL_CARDSETS_REQUEST" })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.get('/api/cardsets', config)

        await dispatch({
            type: 'ALL_CARDSETS_SUCCESS',
            payload: data
        })

        localStorage.setItem('cardSets', JSON.stringify(getState().cardSets))

    }

    catch (error) {
        await dispatch({
            type: 'ALL_CARDSETS_FAIL',
            payload: error
        })

    }
}


export const createNewCardSet = (userToken, setName, cardsList) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'CREATE_CARDSET_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.post('/api/cardsets', { setName }, config)

        dispatch({
            type: 'CREATE_CARDSET_SUCCESS',
            payload: data
        })

        await dispatch( addCardsToSet(userToken, data._id, cardsList) )

        localStorage.setItem('cardSets', JSON.stringify(getState().cardSets))

    }

    catch (error) {
        console.log('carset create error = ', error)

        dispatch({
            type: 'CREATE_CARDSET_FAIL',
            payload: error
        })
    }
}


export const editCardSetNameAction = (userToken, setId, newName) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'CARDSET_EDIT_NAME_REQUEST' })

        const config = {

            headers: {
                authorization : `Bearer ${userToken}`
            },

            'Content-Type' : 'application/json'
        }

        const { data } = await axios.put(`/api/cardsets/${setId}`, 
                                            {setName : newName}, 
                                            config
                                        )

        dispatch({ type : 'CARDSET_EDIT_NAME_SUCCESS', payload: { setId, newName } })

        localStorage.setItem('cardSets', JSON.stringify(getState().cardSets))

    }

    catch (error) {
        dispatch({
            type: 'CARDSET_EDIT_NAME_FAIL',
            payload: error
        })
    }

}


export const deleteCardSetAction = (userToken, setId) => async (dispatch, getState) => {
    try {
        dispatch({ type: 'CARDSET_DELETE_REQUEST' })

        const config = {

            headers: {
                authorization : `Bearer ${userToken}`
            }        
        }

        const { data } = await axios.delete(`/api/cardsets/${setId}`, config)

        // create a reducer to filter this out from the state
        dispatch({ type : 'CARDSET_DELETE_SUCCESS', payload: setId })

        localStorage.setItem('cardSets', JSON.stringify(getState().cardSets))

    }

    catch (error) {
        dispatch({
            type: 'CARDSET_DELETE_FAIL',
            payload: error
        })
    }

}