import './App.css';
import Card from './Components/Card/Card';
import Head from './Components/Head/Head';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
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

              <h5> Databases </h5>
              <ul>
                <li> Microsoft SQL</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>

              <h5> Databases </h5>
              <ul>
                <li> Microsoft SQL</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>

              <h5> Databases </h5>
              <ul>
                <li> Microsoft SQL</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>

            </div>

            <div className="column-border">
              <img className="icon-svg" src={process.env.PUBLIC_URL +'/Media/icons/code.svg'}/>
              <h4> Development</h4>
              <h5> Frameworks </h5>

              <ul>
                <li> React + React Native</li>
                <li> Angular </li>
                <li> ASP.NET Core</li>
                <li> DJango</li>
                <li> JQuery</li>
                <li> Bootstrap </li>
                <li> Express </li> 
              </ul>

              <h5> Languages </h5>

              <ul>
                <li> C</li>
                <li> C#</li>
                <li> C++ </li>
                <li> JavaScript</li>
                <li> Java</li>
                <li> Python </li>
                <li> Ruby </li>
              </ul>


              <h5> Databases </h5>
              <ul>
                <li> Microsoft SQL</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>

              <h5> Dev Tools</h5>
              <ul>
                <li> Docker</li>
                <li> Jenkins CI</li>
                <li> Travis CI</li>
              </ul>
            </div>

            <div className="column">
            <img className="icon-svg" src={process.env.PUBLIC_URL +'/Media/icons/tools.svg'}/>
              <h4> Software</h4>

              <h5> Databases </h5>
              <ul>
                <li> Microsoft SQL</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>

              <h5> Databases </h5>
              <ul>
                <li> Microsoft SQL</li>
                <li> MongoDB</li>
                <li> MySQL</li>
                <li> PostgreSQL</li>
              </ul>

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

        </div>
    </div>
    </section>

    <section className="section-projects"> </section>
    <section className="section-art"> </section>
    <Footer></Footer>
    
    </div>
    
  );
}

export default App;
