/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Narrativa from "views/vistasRocio/narrativa";
import Niveles from "views/vistasRocio/niveles";
import RegisterPage from "views/examples/RegisterPage.js";
import Recompensas from "views/vistasRocio/recompensas";
// others

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/narrativa"
        render={(props) => <Narrativa {...props} />}
      />
      <Route
        path="/niveles"
        render={(props) => <Niveles {...props} />}
      />
      <Route
        path="/recompensas"
        render={(props) => <Recompensas {...props} />}
      />
      <Route
        path="/retos"
        render={(props) => <RegisterPage {...props} />}
      />
    </Switch>
  </BrowserRouter>
);
