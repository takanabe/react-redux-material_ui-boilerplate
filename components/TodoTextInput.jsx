import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { TextField } from 'material-ui';

const defaultStyle = {
  marginLeft: 20
};

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      const text = e.target.value.trim();
      this.props.onSave(text);
      if (this.props.newTodo) {
        this.setState({text: ''});
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    return (
      <TextField className={
                classnames({
                  edit: this.props.editing,
                  'new-todo': this.props.newTodo
                })}
                style={defaultStyle}
                type="text"
                hintText={this.props.placeholder}
                autoFocus="true"
                value={this.state.text}
                onBlur={this.handleBlur.bind(this)}
                onChange={this.handleChange.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)} />
    );
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
};

export default TodoTextInput;
