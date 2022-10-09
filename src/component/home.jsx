import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Homeページです</h1>
      <Link to="/ReactRouterPractice/about">Aboutページに移動</Link>
      <br/>
      <Link to="/ReactRouterPractice/contact">Contactページに移動</Link>
    </>
  );
};