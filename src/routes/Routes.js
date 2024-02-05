import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/login';
import Signup from '../components/signup';

const Routes = () => {
  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </div>
  );
};

export default Routes;
