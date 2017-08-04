import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './routes/index';

import Template from './containers/Template'
// import Home from './containers/Home'
// import Profile from './containers/Profile'

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <div>
        <Route path='/' component={Template} />
    </div>
  </Router>,
  document.getElementById('root')
)
