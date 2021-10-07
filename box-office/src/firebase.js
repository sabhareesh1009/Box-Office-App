import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKDzSLLsmPPlB-Gba9WZ-phhcrQc4DMTE",
  authDomain: "box-office-5e075.firebaseapp.com",
  projectId: "box-office-5e075",
  storageBucket: "box-office-5e075.appspot.com",
  messagingSenderId: "415119328087",
  appId: "1:415119328087:web:f5fa3af78799662cea3412",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
