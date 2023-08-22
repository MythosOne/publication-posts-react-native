import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB38hcKmmYJU7LMtgTZ7_oKCOKsJ-HPUUo",
  authDomain: "my-project-mythos.firebaseapp.com",
  projectId: "my-project-mythos",
  storageBucket: "my-project-mythos.appspot.com",
  messagingSenderId: "858190102688",
  appId: "1:858190102688:web:54d991672f33bf15ef09c5",
  measurementId: "G-F5221BZ4Q8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export default { auth };
