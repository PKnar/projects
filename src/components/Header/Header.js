import React from 'react';
import './Header.css';
import Resume from '../Resume/Resume';


function Header(props){
const {background} = props;
const image= { backgroundImage:` url(${background})`}
   
return (
        <header className='header' style={image} >
           <div className='header-content'>
           <h1>Knarik Poghosyan</h1>
           <h2>Full-Stack Developer</h2>
           <Resume />
           <a href='#projects-section'>Projects</a>
           </div>
        </header>
    )
}

export default Header;