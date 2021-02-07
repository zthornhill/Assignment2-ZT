import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDekQ8NtctFg03ba1Q1FYN9LE4MGJq-8nw",
    authDomain: "my-subscriptions-57fe0.firebaseapp.com",
    databaseURL: "https://my-subscriptions-57fe0-default-rtdb.firebaseio.com",
    projectId: "my-subscriptions-57fe0",
    storageBucket: "my-subscriptions-57fe0.appspot.com",
    messagingSenderId: "885533063839",
    appId: "1:885533063839:web:bcf4e8d6b342f1c96140aa"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
