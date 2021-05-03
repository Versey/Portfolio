import './Head.css';

function Head() {
  return (
    <header id="head">

      <div className="head-container">
        <hgroup id="head-title">
          <img id="head-photo" src ={process.env.PUBLIC_URL +'/Media/me.jpg'}/>
          <h1> Mike Leroux </h1>
          <h4> Full Stack Developer - Designer - Artist</h4>
          <a href="https://github.com/Versey">Github</a>
        </hgroup>
      </div>

    </header>
  );
}

export default Head;
