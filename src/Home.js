import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Front end Home Page</p>
      <Link to='/inscription'>Click me</Link>
      <Link to='/register'>Register here</Link>
    </div>
  );
};

export default Home;
