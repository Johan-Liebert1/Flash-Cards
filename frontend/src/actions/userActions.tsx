import axios from 'axios'

export const userLogin = (username, password) => async (dispatch, getState) => {
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

        localStorage.setItem('userLoginInfo', JSON.stringify(getState().userLoginInfo))

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
        await dispatch({ type: "USER_REGISTER_REQUEST" })

        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post('/user/register', { username, password }, config)

        await dispatch({
            type: 'USER_REGISTER_SUCCESS',
            payload: data
        })

        await dispatch({
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

    localStorage.setItem('userLoginInfo', '')
    localStorage.setItem('cardSets', '')
    localStorage.setItem('cards', '')

}