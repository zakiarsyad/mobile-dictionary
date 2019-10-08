import {
    SETLOADING,
    SETDEFINITIONS,
    SETKEYWORD
} from './actionTypes'

const initialState = {
    loading: false,
    keyword: 'book',
    definitions: []
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
        default:
            return state
    }
}