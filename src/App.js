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
  function greetingToDeveloper(name){
    if(name){
      return 'Hello, ' + name + '!';
    }
    return 'Hello Developer';
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{greetingToDeveloper()}</h3>
        {buttonLearnReact}
      </header>
    </div>
  );
}

export default App;
