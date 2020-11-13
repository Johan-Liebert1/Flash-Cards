import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { cardSetReducers } from './reducers/cardSetReducers'

const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    userRegisterInfo: userRegisterReducer,
    cardSets: cardSetReducers
})

const initialState = {}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools( applyMiddleware(thunk) )
)

export default store