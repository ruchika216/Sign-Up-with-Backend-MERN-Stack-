import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterationForm from './components/RegisterationForm';
import Welcome from "./components/Welcome";
import SignIn from './components/SignIn';
import "./App.css";

function App() {
  return (
    <div>
    <Router>
      
      <Switch>
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path="/" component={RegisterationForm} />
      <Route exact path='/sign-in' component={SignIn} />
      
      </Switch>
      
    </Router>
    </div>
  )
}

export default App

