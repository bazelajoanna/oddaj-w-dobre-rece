import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/logowanie' component={Login}></Route>
      <Route exact path='/rejestracja' component={Registration}></Route>
      <Route exact path='/wylogowano' component={Logout}></Route>
    </Router>
  );
}

export default App;
