import {
    SETLOADING,
    SETDEFINITIONS
} from './actionTypes'

const initialState = {
    loading: false,
    keyword: '',
    definitions: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SETDEFINITIONS:
            return {
                ...state,
                definitions: action.data
            }
        default:
            return state
    }
}