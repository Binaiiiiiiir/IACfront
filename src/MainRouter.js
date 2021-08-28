import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import Home from "./Home";
import Inscription from "./Inscription";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/inscription' component={Inscription}></Route>
      <Route exact path='/dashboard' component={Dashboard}></Route>
    </Switch>
  );
};

export default MainRouter;
