import React from "react";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import Home from "./pages";
import Inscription from "./Inscription";
import PrivacyPolicy from "./PrivacyPolicy";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/inscription" component={Inscription}></Route>
      <Route exact path="/dashboard" component={Admin}></Route>
      <Route exact path="/privacy-policy" component={PrivacyPolicy}></Route>
    </Switch>
  );
};

export default MainRouter;
