import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import ProjectCard from './Component/ProjectCard'
import ProjectList from './ProjectList'

const App = () => {
  const [projectData ,setProjectData] = useState(ProjectList);
  return (
    <div>
    <Navbar />
    <Hero />
    <hr style={{border:"0.4px solid grey"}}></hr>
    <h1 id='Project' className='d-flex justify-content-center my-5'>Projects</h1>
    <ProjectCard projectData={projectData} />
    </div>
  )
  }
export default App;