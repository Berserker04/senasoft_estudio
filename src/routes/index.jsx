import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Detail from "../views/home/components/Detail";
import HomeCotainer from "../views/home/HomeCotainer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeCotainer} />
          <Route exact path="/home2" component={HomeCotainer} />
          <Route exact path="/datail/:id" component={Detail} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
