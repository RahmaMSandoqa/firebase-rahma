import firebase from 'firebase/app';

import 'firebase/storage';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDq_qncK-QUl5z-u_S1yBUTBjfSKmOPLP0",
//   apiKey: "AIzaSyCZpAQyExCuENk_2RFAVZ2BLwXCiqj7bMQ",
     authDomain: "react-5a940.firebaseapp.com",
//   authDomain: "react-drawer.firebaseapp.com",
    databaseURL: "https://react-5a940.firebaseio.com",
//   databaseURL: "https://react-drawer.firebaseio.com",
    projectId: "react-5a940",
//   projectId: "react-drawer",
    storageBucket: "react-5a940.appspot.com",
//   storageBucket: "react-drawer.appspot.com",
    messagingSenderId: "649089203736",
//   messagingSenderId: "796755797467"
    appId: "1:649089203736:web:c339ecb478894c6e048d6d",
    measurementId: "G-J5DZRLL40B"
};
firebase.initializeApp(config);
const storage = firebase.storage();
export {
    storage, firebase as default
}