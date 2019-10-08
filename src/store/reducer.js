import {
    SETLOADING,
    SETDEFINITIONS,
    SETKEYWORD,
    SETSEARCHPOSITION,
    SETIMAGES
} from './actionTypes'

const initialState = {
    loading: false,
    keyword: '',
    definitions: [],
    searchPosition: 'all',
    images: []
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
        default:
            return state
    }
}