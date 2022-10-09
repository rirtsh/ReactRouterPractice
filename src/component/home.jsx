import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Homeページです</h1>
      <Link exact to="/about">Aboutページに移動</Link>
      <br/>
      <Link exact to="/contact">Contactページに移動</Link>
    </>
  );
};