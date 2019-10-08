import {
    SETLOADING,
    SETDEFINITIONS,
    SETKEYWORD,
    SETSEARCHPOSITION,
    SETIMAGES
} from './actionTypes'
import axios from 'axios'

const setLoading = data => ({ type: SETLOADING, data })
export const setKeyword = data => ({ type: SETKEYWORD, data })
export const getDefinitions = payload => dispatch => {
    dispatch(setLoading(true))

    axios({
        method: 'get',
        url: `https://wordsapiv1.p.mashape.com/words/${payload}`,
        headers: {
            'X-Mashape-Key': '696a2fed1emsh07a955841c99c16p152a9ajsn6dca995af54d'
        }
    })
        .then(({ data }) => {
            dispatch(setDefinitions(data.results))
            dispatch(setLoading(false))
        })
        .catch(err => {
            alert(err.response.data.message)
            dispatch(setLoading(false))
        })
}
const setDefinitions = data => ({ type: SETDEFINITIONS, data })
export const setSearchPosition = data => ({ type: SETSEARCHPOSITION, data })
export const getImages = payload => dispatch => {
    dispatch(setLoading(true))

    axios({
        method: 'get',
        url: `https://pixabay.com/api/?key=13800093-98b0153adcad52f5c900cdd93&q=${payload}`
    })
        .then(({ data }) => {
            dispatch(setImages(data.hits))
            dispatch(setLoading(false))
        })
        .catch(err => {
            alert(err.response.data.message)
            dispatch(setLoading(false))
        })
}
const setImages = data => ({ type: SETIMAGES, data })