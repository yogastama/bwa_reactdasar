import logo from './logo.svg';
import logoVue from './logo.png';
import Header from './components/Header';
import Landing from './components/Landing';
import Opinion from './components/Opinion';
import './App.css';

function App() {
  let { frameworkName,
  descFramework,
  linkDocs, logoFramework, shows, opinions } = changePage({isReact : true});
  let showHtml = shows.map((item, index) => {
    return <li key={index}>{item}</li>
  });
  let opinionsHtml = opinions.map((item, index) => {
    return <li key={index}>{item.name} : {item.opinion}</li>
  });
  return (
    <div className="Apps">
      <Header title={frameworkName} logoFramework={logoFramework} />
      <Landing frameworkName={frameworkName} descFramework={descFramework} linkDocs={linkDocs} />
      <Shows shows={showHtml}/>
      <Opinion opinions={opinionsHtml} />
    </div>
  );
}

function Shows(props){
  let {shows} = props;
  return (
    <div className="Shows">
      <h3>
        Showcase
      </h3>
      <ul>
        {shows}
      </ul>
    </div>
  );
}
function changePage(props){
  let { isReact } = props;
  if (isReact) {
    return {
      frameworkName : 'React JS',
      descFramework : 'Library JavaScript untuk membangun antarmuka pengguna.',
      linkDocs : 'https://id.reactjs.org/',
      logoFramework : <img src={logo} className="Header-logo"/>,
      shows : [
        'MJML',
        'Stadia',
        'Run for peace'
      ],
      opinions : [
        {
          'id' : 1,
          'name' : 'yogas',
          'opinion' : 'framwork react js bagus'
        },
        {
          'id' : 2,
          'name' : 'rifki',
          'opinion' : 'framwork react js bagus'
        },
        {
          'id' : 3,
          'name' : 'abel',
          'opinion' : 'framwork react js bagus'
        }
      ]
    };
  } else {
    return {
      frameworkName : 'Vue JS',
      descFramework : 'The Progressive JavaScript Framework.',
      linkDocs : 'https://vuejs.org/',
      logoFramework : <img src={logoVue} className="Header-logo"/>,
      shows : [
        'Geenes',
        'Monefy',
        'Statusfy'
      ],
      opinions : [
        {
          'id' : 1,
          'name' : 'yogas',
          'opinion' : 'framwork vue js bagus'
        },
        {
          'id' : 2,
          'name' : 'rifki',
          'opinion' : 'framwork vue js bagus'
        },
        {
          'id' : 3,
          'name' : 'abel',
          'opinion' : 'framwork vue js bagus'
        }
      ]
    };
  }
}
export default App;
