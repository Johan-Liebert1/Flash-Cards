import axios from 'axios'
import { addCardsToSet } from './cardActions'

export const getAllCardSets = (userToken) => async (dispatch) => {
    try {
        dispatch({ type: "ALL_CARDSETS_REQUEST" })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.get('/api/cardsets', config)

        dispatch({
            type: 'ALL_CARDSETS_SUCCESS',
            payload: data
        })

    }

    catch (error) {
        console.log('carset request error = ', error)

        dispatch({
            type: 'ALL_CARDSETS_FAIL',
            payload: error
        })

    }
}


export const createNewCardSet = (userToken, setName, cardsList) => async (dispatch) => {
    try {
        dispatch({ type: 'CREATE_CARDSET_REQUEST' })

        const config = {
            headers : {
                authorization : `Bearer ${userToken}`
            }
        }

        const { data } = await axios.post('/api/cardsets', { setName }, config)

        console.log('carset create data = ', data)

        dispatch({
            type: 'CREATE_CARDSET_SUCCESS',
            payload: data
        })

        await dispatch( addCardsToSet(userToken, data._id, cardsList) )

    }

    catch (error) {
        console.log('carset create error = ', error)

        dispatch({
            type: 'CREATE_CARDSET_FAIL',
            payload: error
        })
    }
}