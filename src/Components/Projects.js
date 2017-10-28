import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    //testing to see if there are any projects through if statement
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
      //  console.log(project);
      return(
        <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} /> //assigning each project item to projectItem variable
      );
      }); //you want to map through arrays
    }
    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
      {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: React.PropTypes.array,
  onDelete: React.PropTypes.func
}

export default Projects;
