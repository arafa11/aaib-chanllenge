import React, { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Paths from './Paths';
import Header from "../components/Header";
import AppBreadcrumb from "../components/AppBreadcrumb";
import Footer from "../components/Footer";

import Reports from "../pages/Reports";
import NotFound from "../pages/NotFound";


const MainRouter = () => {
  return(
    <div>
      <Router>
        <section className="header">
          <Header />
        </section>
        <section className="main">
          <div className="breadcrumb">
            <AppBreadcrumb />
          </div>
          <Switch>
            <Route exact path={Paths.reports} component={Reports} />
            {/* <Route path="*" render={() => <div>404 Not Found</div>} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </section>
        <section className="footer">
          <Footer />
        </section>
      </Router>
    </div>
  )
}

export default MainRouter;