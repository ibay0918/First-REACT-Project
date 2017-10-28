import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    //testing to see if there are any projects through if statement
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
      //  console.log(project);
      return(
        <TodoItem key={todo.title} todo={todo} /> //assigning each project item to projectItem variable
      );
      }); //you want to map through arrays
    }
    return (
      <div className="Todos">
      <h3>Todo List</h3>
      {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: React.propTypes.array
}

export default Todos;
