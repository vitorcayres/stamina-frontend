import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'

import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAkx7qZGIo8PWyGVIAM7aLfdhOimxDeZcs",
    authDomain: "stamina-frontend.firebaseapp.com",
    databaseURL: "https://stamina-frontend.firebaseio.com",
    projectId: "stamina-frontend",
    storageBucket: "stamina-frontend.appspot.com",
    messagingSenderId: "191142280861",
    appId: "1:191142280861:web:279205d029b311f008de74",
    measurementId: "G-4F7GGD9B4S"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));