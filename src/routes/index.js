import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'

const createRoutes = () => {
  return (
    <Route path='/'component={Template} >
      <IndexRoute component={Home}/>
      <Route path={'/profile'} component={Profile}/>
    </Route>
  )
}

const Routes = createRoutes()

export default Routes
