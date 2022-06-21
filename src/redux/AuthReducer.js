import { authAPI } from "../api/API"

const SET_USERS_DATA = "SET_USERS_DATA"
const IS_FETCHING = "IS_FETCHING"



let initialState = {
    id: null,
    email: null,
    login: null,
    isFetcing: false,
    isAuth: false
}

const AuthRedusers = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetcing: action.isFetcing
            }
        default:
            return state
    }
}

export const setUsersData = (id, email, login, isAuth) => ({ type: SET_USERS_DATA, data: { id, email, login, isAuth } })
export const setIsFetching = (isFetcing) => ({ type: IS_FETCHING, isFetcing })

export const getAppBarProfileThunk = () => (dispatch) => {
        dispatch(setIsFetching(true))
        authAPI.getAppBarProfile()
            .then(response => {
                dispatch(setIsFetching(false))
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    dispatch(setUsersData(id, email, login, true))
                }
            })
    }

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        authAPI.login(email, password, rememberMe)
            .then(response => {
                dispatch(setIsFetching(false))
                if (response.data.resultCode === 0) {
                    dispatch(getAppBarProfileThunk())
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAppBarProfileThunk(null, null, null, false))
                }
                dispatch(setIsFetching(false))
            })
    }
}

export default AuthRedusers