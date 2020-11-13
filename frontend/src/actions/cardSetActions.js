import axios from 'axios'

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

        console.log(data)

    }

    catch (error) {
        dispatch({
            type: 'ALL_CARDSETS_FAIL',
            payload: error
        })

    }
}