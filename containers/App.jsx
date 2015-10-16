import React from "react";
import mui, { AppBar, RaisedButton } from 'material-ui';

// let ThemeManager = new mui.Styles.ThemeManager();

export default class App extends React.Component {
  // static get childContextTypes(){
  //   return { muiTheme: React.PropTypes.object };
  // }
  //
  // getChildContext(){
  //   return { muiTheme: ThemeManager.getCurrentTheme() };
  // }

  render(){
    return (
      <div>
        <h1> Redux Bolerplate(React + Redux + Material UI + ES6 syntacs</h1>
        <AppBar title="My AppBar" />
        <RaisedButton label="Default" />
      </div>
    );
  }
};
