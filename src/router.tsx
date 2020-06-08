import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AUTH_PATH, HOME_PATH } from "constants/paths";
import PageLoader from "components/blocks/PageLoader";
import ProtectedRoute from "components/blocks/ProtectedRoute";

const AuthPage = lazy(() => import("components/pages/Auth"));
const HomePage = lazy(() => import("components/pages/Home"));
const NotFoundPage = lazy(() => import("components/pages/NotFound"));
const ProfilePage = lazy(() => import("components/pages/Profile"));
const DashboardPage = lazy(() => import("components/pages/Dashboard"));

const Router: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <ProtectedRoute auth exact path={AUTH_PATH} component={AuthPage} />
        <Route exact path={HOME_PATH} component={HomePage} />
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
        <ProtectedRoute
          admin
          exact
          path="/dashboard"
          component={DashboardPage}
        />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
