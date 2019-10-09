import firebase from '../configs/firebase'
import db from '../apis/firebase'
import store from '.'
const { fireauth } = firebase
const { oxpord } = db


import {
    SETLOADING,
    SETDEFINITIONS,
    SETKEYWORD,
    SETSEARCHPOSITION,
    SETIMAGES,
    SETLOGGEDIN,
    SETREGISTERED,
    SETHISTORIES
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
            dispatch(saveHistories(payload))
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
export const login = payload => async dispatch => {
    dispatch(setLoading(true))

    try {
        const data = await fireauth.signInWithEmailAndPassword(
            payload.email,
            payload.password
        )
        console.log(data);
        dispatch(setLoggedIn(true, data.user.email))
        dispatch(setLoading(false))
        alert('login success')
    } catch (err) {
        alert(err.message)
        dispatch(setLoading(false))
        dispatch(setLoggedIn(false, ''))
    }
}
const setLoggedIn = (data, email) => ({ type: SETLOGGEDIN, data, email })
export const setRegistered = () => ({ type: SETREGISTERED })
export const register = payload => async dispatch => {
    dispatch(setLoading(true))

    try {
        const data = await fireauth.createUserWithEmailAndPassword(
            payload.email,
            payload.password
        )
        console.log(data);
        dispatch(setLoggedIn(true, data.user.email))
        dispatch(setLoading(false))
        alert('registration success')
    } catch (err) {
        alert(err.message)
        dispatch(setLoading(false))
        dispatch(setLoggedIn(false, ''))
    }
}
export const logout = payload => async dispatch => {
    try {
        await fireauth.signOut()
        dispatch(setLoggedIn(false, ''))
    } catch (err) {
        alert(err.message)
    }
}

export const getHistories = payload => async dispatch => {
    // dispatch(setLoading(true))

    // try {
    //     console.log('masuk get histories');
    //     const data = await oxpord
    //         .where("email", "==", store.getState().user.email)
    //         .orderBy('createdAt', 'desc')

    //     data.onSnapshot(querySnapshot => {
    //         const histories = []

    //         querySnapshot.forEach((doc) => {
    //             const newData = {
    //                 id: doc.id,
    //                 ...doc.data()
    //             }
    //             histories.push(newData)
    //         })
    //         dispatch(setHistories(histories))
    //     })
    //     dispatch(setLoading(false))
    // } catch (err) {
    //     console.log(err.message)
    //     dispatch(setLoading(false))
    // }
}

export const setHistories = data => ({ type: SETHISTORIES, data })

export const saveHistories = payload => async dispatch => {
    const createdAt = new Date()
    const keyword = payload
    const email = store.getState().user.email

    dispatch(setLoading(true))

    try {
        await oxpord.add({
            email, keyword, createdAt
        })
        dispatch(setLoading(false))
    } catch (err) {
        console.log(err.message)
        dispatch(setLoading(false))
    }
} 