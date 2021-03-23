import PropTypes from 'prop-types';

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
  Header.propTypes = {
    title : PropTypes.string.isRequired
  };
export default Header;