import React from 'react';
import './App.scss';
import Header from './Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Register/Register';
import LogIn from './logIn/logIn';


function App() {

  return (
    <Router className="App">
      <Header />
        <div className="container-fluid px-0">

          <Switch>
            
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/">
              Home page
            </Route>

          </Switch>
        </div>
    </Router>
  );
}

export default App;
