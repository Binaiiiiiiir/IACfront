import React from "react";
import { Link } from "react-router-dom";
import "./css/binair.css";

const Home = () => {
  return (
    <>
      <h1>Hello world</h1>
      <p>Front end Home Page</p>
      <Link to='/inscription'>Click me</Link>
      <Link to='/dashboard'>dashboard here</Link>

      <script src='binair.js' />
    </>
  );
};

export default Home;
