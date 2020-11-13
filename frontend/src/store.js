import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { cardSetReducers } from './reducers/cardSetReducers'
import { cardsReducers } from './reducers/cardReducers'

const reducers = combineReducers({
    userLoginInfo: userLoginReducer,
    userRegisterInfo: userRegisterReducer,
    cardSets: cardSetReducers,
    cards: cardsReducers
})

const initialState = {}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools( applyMiddleware(thunk) )
)

export default store