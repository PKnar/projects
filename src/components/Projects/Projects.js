import React from 'react';
import './Projects.css'
import Card from '../Card/Card';

const Projects =(props)=>{
   const content = props.projects.map((project,i) =>{
  
    let logos = project.images.map((src,i) =>{
   return (
       <img src={src} key={i} alt ={project.title} />
   )
    }
    )
    
     return(
        <Card key = {i} >
        <h2>{project.title}</h2>
        <h3>{project.description}</h3>
        <div className='video-logos'> 
        <div className='logos'> {logos}</div>
        <video  src={project.source} autoPlay={true} loop={true} />
        </div>
        </Card>
      )
    
    })


  

    return(
    <section>
     <h1>Projects</h1>
     <div className='projects-wrapper'>
    {content}
     </div>
   </section>
    )
}


export default Projects;