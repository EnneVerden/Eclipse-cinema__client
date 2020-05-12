import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AUTH_PATH, HOME_PATH } from "constants/paths";
import PageLoader from "components/blocks/PageLoader";
import ProtectedRoute from "components/blocks/ProtectedRoute";

const AuthPage = lazy(() => import("components/pages/Auth"));
const HomePage = lazy(() => import("components/pages/Home"));

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<PageLoader />}>
        <ProtectedRoute exact path={AUTH_PATH} url="/" component={AuthPage} />
        <Route exact path={HOME_PATH} component={HomePage} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Router;
