import { Link } from "react-router-dom";

export const Contact = (props) => {
  return (
    <>
      <h1>Contactページです</h1>
      <p>props : {props.message}</p>
      <Link to="/">Homeページに移動</Link>
      <br/>
      <Link to="/about">Aboutページに移動</Link>
    </>
  );
};