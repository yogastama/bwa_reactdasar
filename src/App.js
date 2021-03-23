import logo from './logo.svg';
import './App.css';

function App() {
  let frameworkName = "React JS";
  let descFramework = 'Library JavaScript untuk membangun antarmuka pengguna.';
  let linkDocs = 'https://id.reactjs.org/';
  return (
    <div className="Apps">
      <Header title={frameworkName} />
      <Landing frameworkName={frameworkName} descFramework={descFramework} linkDocs={linkDocs} />
    </div>
  );
}
function Header(props){
  let { title } = props;
  return (
    <div className="Header">
      <img src={logo} className="Header-logo"/>
      <div className="Header-title">
        {title}
      </div>
    </div>
  );
}
function Landing(props){
  let {
    frameworkName,
    descFramework,
    linkDocs
  } = props;
  let name = 'Developers';
  return (
      <div className="Landing">
        <h1>
          {frameworkName}
        </h1>
        <p>
        {descFramework}
        </p>
        <a className="btn-docs" href={linkDocs} target="_blank">
          Dokumentasi
        </a>
        <button className="btn-docs" onClick={e => sapaDev(frameworkName, name)}>
          Sapa saya
        </button>
      </div>
  );
}
function sapaDev(frameworkName, name){
  return alert('Halo ' + name + ' ' + frameworkName + '!');
}
export default App;
