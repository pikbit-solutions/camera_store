import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBdpJ-gMcL9CV34iqG8jGsfoe6BU-msmRc",
    authDomain: "trintycam-c9fd1.firebaseapp.com",
    projectId: "trintycam-c9fd1",
    storageBucket: "trintycam-c9fd1.appspot.com",
    messagingSenderId: "592179733088",
    appId: "1:592179733088:web:3a89c89aa84bbe47741905"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  export {storage, firebase as default};