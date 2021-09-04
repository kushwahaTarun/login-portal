import React from "react";
import { Route, Switch } from "react-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Contact} path="/contact" exact />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
