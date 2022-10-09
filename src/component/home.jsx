import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Homeページです</h1>
      <Link exact to="/ReactRouterPractice/about">Aboutページに移動</Link>
      <br/>
      <Link exact to="/ReactRouterPractice/contact">Contactページに移動</Link>
    </>
  );
};