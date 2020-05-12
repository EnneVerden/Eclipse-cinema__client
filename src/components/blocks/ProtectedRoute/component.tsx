import React, { useCallback } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { IUser } from "types/user";

interface IProps {
  component: React.FC;
  user?: IUser | {};
  url: string;
  exact: boolean;
  path: string;
}

const ProtectedRoute: React.FC<IProps> = ({
  component: Component,
  user = {},
  url,
  ...props
}) => {
  const protectRoute = useCallback(
    () =>
      Object.keys(user).length ? (
        <Redirect to={url} />
      ) : (
        <Component {...props} />
      ),
    [user, url, props]
  );

  return <Route {...props} render={(props) => protectRoute()} />;
};

export default ProtectedRoute;
