import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyAq3w6usvTOtIi_DTUrkKStBaFolrHkWmw",
  authDomain: "chat-react-firebase-e33b1.firebaseapp.com",
  projectId: "chat-react-firebase-e33b1",
  storageBucket: "chat-react-firebase-e33b1.appspot.com",
  messagingSenderId: "84511005355",
  appId: "1:84511005355:web:8807eb7e19d1dfa2b235ee",
  measurementId: "G-05L2GQ6XZV"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore
    }}>
      <App />
    </Context.Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
