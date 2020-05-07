import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AUTH_PATH, HOME_PATH } from "constants/paths";
import PageLoader from "components/blocks/page-loader";

const AuthPage = lazy(() => import("components/pages/auth"));
const HomePage = lazy(() => import("components/pages/home"));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<PageLoader />}>
        <Route exact path={AUTH_PATH} component={AuthPage} />
        <Route exact path={HOME_PATH} component={HomePage} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Router;
