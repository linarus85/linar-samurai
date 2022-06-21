import { usersAPI } from "../api/API"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const CURRENT_PAGE = "CURRENT_PAGE"
const TOTAL_COUNT = "TOTAL_COUNT"
const IS_FETCHING = "IS_FETCHING"


let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetcing: false,
}

const UserRedusers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
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

export const followAction = (userId) => ({ type: FOLLOW, userId })
export const unfollowAction = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export const setTotalCount = (totalCount) => ({ type: TOTAL_COUNT, totalCount })
export const setIsFetching = (isFetcing) => ({ type: IS_FETCHING, isFetcing })

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(response.data.items))
                dispatch(setTotalCount(response.data.totalCount))
            })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        usersAPI.follow(userId)
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(followAction(userId))
          }
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        usersAPI.unfollow(userId)
        .then(response => {
          if (response.data.resultCode === 0) {
            dispatch(unfollowAction(userId))
          }
        })
    }
}

export default UserRedusers