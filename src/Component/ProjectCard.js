import React from 'react'
import { ReactDOM } from 'react-dom';
import ProjectList from '../ProjectList';


const ProjectCard = ({ projectData }) => {
  return (
    <div className='projectGrid'>
      {projectData.map((currentProject, index) => {
        return (<>
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img className="card-img-top" src={currentProject.ProjectLogo} alt={currentProject.Alt} ></img>
            <div className="card-body">
              <h5 className="card-title text-light">{currentProject.ProjectName}</h5>
              <p className="card-text text-light">{currentProject.ProjectDescription}</p>
              <a href={currentProject.ProjectLink} className="btn btn-primary">Visit Website</a>
            </div>
          </div>
        </>)
      })}
    </div>
  );
}

export default ProjectCard;