import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h1>Aboutページです</h1>
      <Link to="/ReactRouterPractice/">Homeページに移動</Link>
      <br/>
      <Link to="/ReactRouterPractice/contact">Contactページに移動</Link>
    </>
  );
};