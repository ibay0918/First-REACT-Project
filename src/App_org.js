import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

//define the initial state keys
class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log();
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    });
  }

getProjects(){
  this.setState({projects: [
    {
      id: uuid.v4(), //to generate new ids
      title: 'Business Website',
      category: 'Web Design'
    },
    {
      id: uuid.v4(),
      title: 'Social App',
      category: 'Mobile Development'
    },
    {
      id: uuid.v4(),
      title: 'Ecommerce Shopping Cart',
      category: 'Web Development'
    }
  ]});
}


//Set the data; will fire off when component is rendered; put data here if getting data from an API
componentWillMount(){
this.getProjects();

  this.getTodos();
}

componentDidMount(){
  this.getTodos();
}

handleAddProject(project){
  let projects = this.state.projects;
  projects.push(project);
  this.setState({projects:projects});
}

handleDeleteProject(id){
    let projects = this.state.projects; //remove the project
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
}
  render() {
    //add a Super at the top or you will get an error
     //passing keys (states at top of project) as properties here
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr />
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
