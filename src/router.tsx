import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ROOT_PATH } from "constants/paths";
import PageLoader from "components/blocks/page-loader/component";

const AuthPage = lazy(() => import("components/pages/auth"));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<PageLoader />}>
        <Route exact path={ROOT_PATH} component={AuthPage} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Router;
