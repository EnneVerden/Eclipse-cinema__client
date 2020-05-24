import React, { useCallback } from "react";
import { Route, Redirect } from "react-router-dom";
import { IUser } from "types/user";
import UnauthorizedPage from "components/pages/Unauthorized";

interface IProps {
  component: React.FC;
  user: IUser | {};
  exact?: boolean;
  path: string;
  auth?: boolean;
}

const ProtectedRoute: React.FC<IProps> = ({
  component: Component,
  user,
  auth,
  ...props
}) => {
  const protectedRoute = useCallback(
    () =>
      Object.keys(user).length ? (
        <Component {...props} />
      ) : (
        <UnauthorizedPage />
      ),
    [user, Component]
  );
  const protectedAuth = useCallback(
    () =>
      Object.keys(user).length ? <Redirect to="/" /> : <Component {...props} />,
    [user, Component]
  );

  return <Route {...props} render={auth ? protectedAuth : protectedRoute} />;
};

export default ProtectedRoute;
