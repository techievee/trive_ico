import React, { Component } from 'react';
import Home from './Home'
import DashboardHome from './Dashboard/Home'
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dashboard' component={DashboardHome}/>
    </Switch>
  </main>
)

export default Main;