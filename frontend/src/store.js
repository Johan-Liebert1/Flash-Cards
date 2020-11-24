import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { cardSetReducers } from "./reducers/cardSetReducers";
import { cardsReducers } from "./reducers/cardReducers";

const reducers = combineReducers({
	userLoginInfo: userLoginReducer,
	userRegisterInfo: userRegisterReducer,
	cardSets: cardSetReducers,
	cards: cardsReducers
});

const userLoginInfoFromLS = localStorage.getItem("userLoginInfo")
	? JSON.parse(localStorage.getItem("userLoginInfo"))
	: {};

const cardSetsFromLS = localStorage.getItem("cardSets")
	? JSON.parse(localStorage.getItem("cardSets"))
	: {};

const cardsFromLS = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : {};

const initialState = {
	userLoginInfo: userLoginInfoFromLS,
	cardSets: cardSetsFromLS,
	cards: cardsFromLS,
	scrollingDisabled: false
};

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
