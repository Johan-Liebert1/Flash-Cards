import axios from 'axios'

export const userLogin = (username, password) => async (dispatch) => {
    try {
        await dispatch({ type: "USER_LOGIN_REQUEST" })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post('/user/login', { username, password }, config)

        await dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })
    }

    catch (error) {
        await dispatch({
            type: 'USER_LOGIN_FAIL',
            paylaod: error
        })
    }

} 


export const userRegister = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: "USER_REGISTER_REQUEST" })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post('/user/register', { username, password }, config)

        dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: data
        })

        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: data
        })

    }

    catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAIL',
            paylaod: error
        })
    }

} 


export const userLogoutAction = () => (dispatch) => {
    dispatch({ type: "USER_LOGOUT_REQUEST" })

    dispatch({ type : "USER_LOGOUT_SUCCESS" })
}