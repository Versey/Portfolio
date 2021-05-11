import './App.css';
import Card from './Components/Card/Card';
import Head from './Components/Head/Head';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import {Carousel} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {NavDropdown} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'



const App = ()=> {
  return (
    <div className="App">
    <Head></Head>
    
    <section className="section-about-me">
    <div className="section-content-column">
      
      <div className="section-header">
        <h1 className="section-h1">Hi there, nice to meet you!</h1>

        <h2 className="section-h2">
              Having grown up using computers throughout my youth, I have a fierce passion for programming and all things computing. I find enjoyment in problem solving and critically analyzing topics.
               
              When I'm not learning new languages, or playing around in Photoshop, my other hobbies include hockey, gaming, and excercising.

        </h2>

      </div>

    </div>
    </section>

    <section className="section-skills">
    <div className="section-content-column">
      
    <div className="section-header"> </div>
      <div className="section-content">
      <Card
            content={
              
              
            <div className="skills-tech">
            
            

            <div className="column">
            <img className="icon-svg" src={process.env.PUBLIC_URL +'/Media/icons/design.svg'}/>
              <h4> Design</h4>
              <p> Adobe Photoshop, Adobe Illustrator, ZBrush, Autodesk Maya, Blender, Webflow</p>

            </div>

            <div className="column-border">
              <img className="icon-svg" src={process.env.PUBLIC_URL +'/Media/icons/code.svg'}/>
              <h4> Development</h4>
              <h5> Frameworks/Libraries</h5>

              <p>React + React Native, Angular, ASP.NET Core, DJango, JQuery, Bootstrap, Express </p>

              <h5> Languages </h5>
              <p> C, C++, C#, Java, JavaScript, Python, Ruby</p>

              <h5> Databases </h5>
              <ul>
                <p> Microsoft SQL, MongoDB, MySQL, PostgreSQL</p>
              </ul>

              <h5> Dev Tools</h5>
              <ul>
                <p> Docker, Jenkins CI, Travis CI</p>
              </ul>
            </div>

            <div className="column">
            <img className="icon-svg" src={process.env.PUBLIC_URL +'/Media/icons/tools.svg'}/>
              <h4> Software</h4>
              <p> Docker, Jenkins CI, Travis CI</p>

            </div>

            </div>
            }>   
      </Card>
      </div>
    </div>
    </section>

    <section className="section-work">
    <div className="section-content-column">

      <div className="section-header"> <h1> Just some of the work I've done.</h1></div>

        <div className="section-content">
          <img className="image-brands" src={process.env.PUBLIC_URL +"/Media/logo_rounded.png"}/>
        

        </div>
    </div>
    </section>

    <section className="section-projects">
      
       
    
    
    </section>

    <section className="section-art">

    </section>
    <Footer></Footer>
    
    </div>
    
  );
}

export default App;
