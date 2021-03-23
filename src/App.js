import logo from './logo.svg';
import './App.css';

function App() {
  const reactjsLink = "https://reactjs.org";
  const frameworkName = 'React JS';
  const buttonLearnReact = <a
    className="App-link"
    href={reactjsLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn {frameworkName}
  </a>;
  let mulaiDetik = 1;
  function greetingToDeveloper(name){
    if(name){
      return 'Hello, ' + name + '!';
    }
    return 'Hello Developer';
  }
  function nowDate(){
    return (
      <>
        <p>
          <b>Waktu saat ini : </b> { new Date().toLocaleDateString()}
        </p>
      </>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {nowDate()}
        </p>
        <h3>{greetingToDeveloper()}</h3>
        {buttonLearnReact}
      </header>
    </div>
  );
}

export default App;
