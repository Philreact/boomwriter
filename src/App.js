import React from "react";
import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Activities from "./containers/Activities/Activities";
import Pricing from "./containers/Pricing/Pricing";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/tools" component={Activities} />
        <Route path="/pricing-plus/teachers" component={Pricing} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
};

export default App;
