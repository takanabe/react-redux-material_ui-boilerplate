import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

// import mui, { AppBar, RaisedButton } from 'material-ui';

// let ThemeManager = new mui.Styles.ThemeManager();

class App extends Component {
  // static get childContextTypes(){
  //   return { muiTheme: React.PropTypes.object };
  // }
  //
  // getChildContext(){
  //   return { muiTheme: ThemeManager.getCurrentTheme() };
  // }
  //
  render() {
    const { todos, actions } = this.props;
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}


App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
