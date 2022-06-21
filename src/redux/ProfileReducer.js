import { profileAPI } from "../api/API"

const SET_PROFILE = "SET_PROFILE"
const IS_FETCHING = "IS_FETCHING"
const SET_STATUS = "SET_STATUS"
const SET_PHOTO = "SET_PHOTO"




let initialState = {
    profile: null,
    values: [],
    isFetcing: false,
    status: '',
}

const ProfileRedusers = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetcing: action.isFetcing
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
       
        default:
            return state
    }
}


export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setIsFetching = (isFetcing) => ({ type: IS_FETCHING, isFetcing })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos })


export const getProfileThunk = (userId) => async (dispatch) => {
    dispatch(setIsFetching(true))
    let response = await profileAPI.getProfile(userId)
    dispatch(setIsFetching(false))
    dispatch(setProfile(response.data))
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(setPhoto(response.data.data.photos))
    }
}


export default ProfileRedusers
