import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';

import mui, {AppBar} from 'material-ui';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
import MyRawTheme from '../src/material_ui_raw_theme_file'

class Header extends Component {
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }

  getChildContext(){
    return {  muiTheme: ThemeManager.getMuiTheme(MyRawTheme)};
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <AppBar title="React + Redux + Material UI Boilerplate" />
          <h1>todos</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
