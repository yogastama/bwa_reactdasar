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
  export default Landing;