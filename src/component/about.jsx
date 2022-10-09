import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>Aboutページです</h1>
      <Link exact to="/">Homeページに移動</Link>
      <br/>
      <Link exact to="/contact">Contactページに移動</Link>
    </>
  );
};