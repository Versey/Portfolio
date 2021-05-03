import './App.css';
import Card from './Components/Card/Card';
import Head from './Components/Head/Head';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

    <Head></Head>

    <Card
    anchor = "About"
    title="About me"
    content=
    {
      <div>
        <p>
          Having grown up using computers throughout my youth, I have a fierce passion for programming and all things computing. I have a strong interest in software development, and programming is a hobby in which I deeply enjoy. I find enjoyment in problem solving and critically analyzing topics. 
          </p>
        <p>
          On top of my technical background, I also have an interest in graphic design and art. As a way to get away from the more technical side of things, I love spending time drawing and making art within Photoshop. I also have experience working with 3D modeling.  
        </p>

        <p>
          When I'm not learning new languages, or playing around in Photoshop, my other hobbies include hockey, gaming, and excercising!
        </p>
  
      </div>
      }
      rimage = {<img className="card-photo-right" src ={process.env.PUBLIC_URL +'/Media/me2.jpg'}/>}
    ></Card>
    
    <Card
    anchor = "Web"
    title="Web"
    content=
    {
    <div>
      <p>
        Hello world!
      </p>

    </div>
    }
    ></Card>

    <Card
    anchor = "Art"
    title="Art"
    content="I made some art bro. Look at some of my art!"
    ></Card>

  
    
    </div>
  );
}

export default App;
