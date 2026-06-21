import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey:            "AIzaSyBDAUw6YzOih5JIGPhgGp1Qb_Lpet3OlJ8",
  authDomain:        "sooraj-caterers.firebaseapp.com",
  projectId:         "sooraj-caterers",
  storageBucket:     "sooraj-caterers.firebasestorage.app",
  messagingSenderId: "1052370335653",
  appId:             "1:1052370335653:web:6373e663d7ccbd56ce1a4c",
};

firebase.initializeApp(firebaseConfig);

export const fsdb        = firebase.firestore();
export const DB_ROOT     = fsdb.collection("sooraj-caterers").doc("main");
export const EVENTS_COL  = DB_ROOT.collection("events");
export const INCOME_COL  = DB_ROOT.collection("income");
export const EXPENSES_COL = DB_ROOT.collection("expenses");
export { firebase };
