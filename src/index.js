import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Template from './containers/Template'
import Home from './containers/Home'
import Profile from './containers/Profile';

const history = createBrowserHistory();

ReactDOM.render(
  <Template>
    <Router history={history}>
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  </Template>,
  document.getElementById('root')
)
