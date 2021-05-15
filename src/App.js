import React, {useContext} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./componets/app-router";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "./index";

import "./App.css";

import Navbar from "./componets/navbar";
import Loader from "./componets/loader";

function App() {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loader />
  }
  return (
    <Router>
      <Navbar />
      <AppRouter/>
    </Router>
  );
}

export default App;