import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import Registration from './Containers/Registration/Index';
import Login from './Containers/Login/Index';
import Dashboard from './Containers/Dashboard/Index';


import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Registration} />
      <Route exact path='/register' component={Registration} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>

  );
}

export default App;
