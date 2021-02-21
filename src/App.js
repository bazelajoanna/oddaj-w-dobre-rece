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
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}></Route>
      <Route exact path={process.env.PUBLIC_URL + '/logowanie'} component={Login}></Route>
      <Route exact path={process.env.PUBLIC_URL + '/rejestracja'} component={Registration}></Route>
      <Route exact path={process.env.PUBLIC_URL + '/wylogowano'} component={Logout}></Route>
    </Router>
  );
}

export default App;
