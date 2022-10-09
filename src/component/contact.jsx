import { Link } from "react-router-dom";

export const Contact = (props) => {
  return (
    <>
      <h1>Contactページです</h1>
      <p>props : {props.message}</p>
      <Link to="/ReactRouterPractice/">Homeページに移動</Link>
      <br/>
      <Link to="/ReactRouterPractice/about">Aboutページに移動</Link>
    </>
  );
};