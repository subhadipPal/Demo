import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "yourGame.firebaseapp.com",
  databaseURL: "https://my-game-76ab7.firebaseio.com",
  projectId: "my-game-76ab7",
  storageBucket: "my-game-76ab7.appspot.com",
  messagingSenderId: "1084347503797",
  appId: "1:1084347503797:web:c8d9bdd76a94cd756edafc",
  measurementId: "G-ZDHK2CEVKC"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
