import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>Aboutページです</h1>
      <Link to="/react-router-practice">Homeページに移動</Link>
      <br/>
      <Link to="/react-router-practice/contact">Contactページに移動</Link>
    </>
  );
};