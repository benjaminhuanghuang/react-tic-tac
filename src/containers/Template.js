import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import RaisedButton from 'material-ui/RaisedButton';
//
import NavDrawer from '../components/NavDrawer'

injectTapEventPlugin();

export default class Template extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavDrawer></NavDrawer>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}