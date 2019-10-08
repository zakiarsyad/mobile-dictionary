import firebase from '../configs/firebase'

const { firestore } = firebase
const oxpord = firestore.collection('oxpord')

export default { oxpord }