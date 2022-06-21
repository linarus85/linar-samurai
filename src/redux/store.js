import { applyMiddleware, combineReducers, createStore } from "redux";
import AuthRedusers from "./AuthReducer";
import ProfileRedusers from "./ProfileReducer";
import UserRedusers from "./UserReducer";
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    userPage: UserRedusers,
    profilePage: ProfileRedusers,
    auth: AuthRedusers,
})


let store = createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store

export default store

