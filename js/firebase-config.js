import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBsWNfPGs6TbuLmU5aprFJl-9zS607NM2w",
  authDomain: "tpv-163.firebaseapp.com",
  projectId: "tpv-163",
  storageBucket: "tpv-163.firebasestorage.app",
  messagingSenderId: "738100212906",
  appId: "1:738100212906:web:16d0229db75bee62438cd3"

};


// Inicialitzar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);