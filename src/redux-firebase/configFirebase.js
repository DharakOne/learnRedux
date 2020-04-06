import * as firebase  from   'firebase/app'
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAcjo3dwYYPhSrrfLdu6eEbEX9m3BtWfqo",
    authDomain: "learfirebase-c3461.firebaseapp.com",
    databaseURL: "https://learfirebase-c3461.firebaseio.com",
    projectId: "learfirebase-c3461",
    storageBucket: "learfirebase-c3461.appspot.com",
    messagingSenderId: "930081588492",
    appId: "1:930081588492:web:16048000fd4683536cf529",
    measurementId: "G-HF20N26GVW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export const auth =firebase.auth