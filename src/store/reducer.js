import {
    SETLOADING,
    SETDEFINITIONS,
    SETKEYWORD,
    SETSEARCHPOSITION,
    SETIMAGES,
    SETLOGGEDIN,
    SETREGISTERED
} from './actionTypes'

const initialState = {
    loading: false,
    keyword: 'run',
    definitions: [],
    searchPosition: 'all',
    images: [],
    isLoggedIn: false,
    user: {
        email: '',
        id: ''
    },
    isRegistered: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETDEFINITIONS:
            return {
                ...state,
                definitions: action.data
            }
        case SETKEYWORD:
            return {
                ...state,
                keyword: action.data
            }
        case SETLOADING:
            return {
                ...state,
                loading: action.data
            }
        case SETSEARCHPOSITION:
            return {
                ...state,
                searchPosition: action.data
            }
        case SETIMAGES:
            return {
                ...state,
                images: action.data
            }
        case SETLOGGEDIN:
            return {
                ...state,
                isLoggedIn: action.data,
                user: {
                    email: action.email,
                    id: action.id
                }
            }
        case SETREGISTERED:
            return {
                ...state,
                isRegistered: !state.isRegistered
            }
        default:
            return state
    }
}