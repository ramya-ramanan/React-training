function Port(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p><b>Department:</b> {props.dept}</p>

      <p><b>Year:</b> {props.year}</p>
    </div>
  );
}

export default Port;
