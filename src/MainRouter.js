import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Home from "./Home";
import Inscription from "./Inscription";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/inscription" component={Inscription}></Route>
      <Route exact path="/dashboard" component={Admin}></Route>
    </Switch>
  );
};

export default MainRouter;
