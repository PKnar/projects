import React from 'react';
import './App.css';
import background from './image/bg.jpg';
import Header from  './components/Header/Header'
import smartbrain from './projects-gif/smartbrain.mp4';
import catalist from './projects-gif/Catalist.mp4';
import forecast from './projects-gif/hackyourforecast.mp4';
import Projects from './components/Projects/Projects';

function App() {
let projects = [
  {
    title:'Weather API Service',
    description:'Full-Stack',
    source:`${forecast}`,
    images:[
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    'https://eternitech.com/wp-content/uploads/2016/11/CSS3.png',
    'https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png',
    'http://3.bp.blogspot.com/-G1Nosx99Td0/UwtphL0KbxI/AAAAAAAAUP4/0P2mG3qjvB4/s1600/EJS.PNG',
    'https://appstore.edgenexus.io/wp-content/uploads/2018/09/mysql-logo.png'
  ],
  code:[{
   label:'Code',
   href:'https://github.com/HackYourForecast/hackyourforecast/tree/master/servers',
}],
 demo:'http://ec2-3-120-128-152.eu-central-1.compute.amazonaws.com:5000/'
  },
     {
      title:'Landing Page',
      description:'Front-End',
      source:`${catalist}`,
      images:[
        'https://www.freeiconspng.com/uploads/html5-icon-5.png',
        'https://eternitech.com/wp-content/uploads/2016/11/CSS3.png',
        'https://www.sportsengineers.com/wp-content/uploads/2015/05/js-logo-badge-512.png'
      ],
      code:[{
         label:'Code',
         href:'https://github.com/PKnar/Catalist-by-VentureIQ-landing-page'
      }],
      demo:'https://pknar.github.io/Catalist-by-VentureIQ-landing-page/',
    },
    {
      title:'Face detector',
      description:'Full-Stack',
      source:`${smartbrain}`,
      images:['https://sap.github.io/ui5-webcomponents/images/react.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/220px-Postgresql_elephant.svg.png',
       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
       ],
       code:[
       {
         'label':'Back-End Code',
         'href':'https://github.com/PKnar/faceDetector'
       },
       {
         'label':'Front-End Code',
         'href':'https://github.com/PKnar/faceDetector/tree/front-end'
       }
       ],
       demo:'https://facedetectingapp.herokuapp.com/',
    },
]
  return (
    <div className="App">
      <Header background ={background} />
      <div id='projects-section'>
      <Projects
        projects ={projects}
      />
      </div>
    </div>
  );
}

export default App;
