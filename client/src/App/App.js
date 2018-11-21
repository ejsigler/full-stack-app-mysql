import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Users from './pages/Users';
import Profile from './pages/profile'
import Signup from './pages/signup';
import Login from './pages/login';
import Logout from './pages/logout';



class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/users' component={Users}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
        </Switch>
      </div>
         
    )
   
    
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;