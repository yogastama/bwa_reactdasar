
function Opinion(props){
    let {opinions} = props;
    return (
      <div className="Shows">
        <h3>
          Opinions
        </h3>
        <ul>
          {opinions}
        </ul>
      </div>
    );
  }
  export default Opinion;