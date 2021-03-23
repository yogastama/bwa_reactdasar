import logo from './logo.svg';
import logoVue from './logo.png';
import './App.css';

function App() {
  let { frameworkName,
  descFramework,
  linkDocs, logoFramework } = changePage({isReact : true});
  return (
    <div className="Apps">
      <Header title={frameworkName} logoFramework={logoFramework} />
      <Landing frameworkName={frameworkName} descFramework={descFramework} linkDocs={linkDocs} />
    </div>
  );
}
function Header(props){
  let { title, logoFramework } = props;
  return (
    <div className="Header">
      {logoFramework}
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
function changePage(props){
  let { isReact } = props;
  if (isReact) {
    return {
      frameworkName : 'React JS',
      descFramework : 'Library JavaScript untuk membangun antarmuka pengguna.',
      linkDocs : 'https://id.reactjs.org/',
      logoFramework : <img src={logo} className="Header-logo"/>
    };
  } else {
    return {
      frameworkName : 'Vue JS',
      descFramework : 'The Progressive JavaScript Framework.',
      linkDocs : 'https://vuejs.org/',
      logoFramework : <img src={logoVue} className="Header-logo"/>
    };
  }
}
export default App;
