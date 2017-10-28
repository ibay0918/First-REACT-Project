import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.propTypes.object
}

export default TodoItem;
