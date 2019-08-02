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
 let code_buttons=project.code.map(link =>{
      return <a className={link.label} href={`${link.href}`} key={link.href} target={'_blank'}>{link.label}</a>
       
      })


     return(
        <Card key = {i} >
        <div className='video-logos'> 
        <h2>{project.title}</h2>
        <h3>{project.description}</h3>
        <div className='logos'> {logos}</div>
        <video  src={project.source}  controls={true} />
        <div className='links'>
          <a href={`${project.demo}`} target={'_blank'} id='demo'>Demo</a>
          {code_buttons}
        </div>
        </div>
        </Card>
      )
    
    })


  

    return(
    <section>
     <h1>- Projects -</h1>
     <div className='projects-wrapper'>
    {content}
     </div>
   </section>
    )
}


export default Projects;