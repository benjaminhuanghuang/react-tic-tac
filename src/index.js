import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Routes from './routes/index';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} routes={Routes}>
  </Router>,
  document.getElementById('root')
)
