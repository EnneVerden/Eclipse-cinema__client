import React, {
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { Route, Redirect } from "react-router-dom";
import UnauthorizedPage from "components/pages/Unauthorized";
import { TProps } from "./types";

const ProtectedRoute: React.FC<TProps> = ({
  authorization,
  component: Component,
  user,
  auth,
  admin,
  ...props
}) => {
  const [accessIsAllowed, setAccessIsAllowed] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const protectedRoute = useCallback(() => {
    if (admin) {
      return accessIsAllowed && isAdmin ? (
        <Component {...props} />
      ) : (
        <UnauthorizedPage />
      );
    } else {
      return accessIsAllowed ? <Component {...props} /> : <UnauthorizedPage />;
    }
  }, [accessIsAllowed, props]);
  const protectedAuth = useCallback(
    () => (accessIsAllowed ? <Redirect to="/" /> : <Component {...props} />),
    [accessIsAllowed, props]
  );

  useEffect(() => {
    if (!Object.keys(user).length) {
      authorization();
    }
  }, [user, authorization]);

  useLayoutEffect(() => {
    if (Object.keys(user).length) {
      setAccessIsAllowed(true);
    }
  }, [user, setAccessIsAllowed]);

  useLayoutEffect(() => {
    if (Object.keys(user).length) {
      user.roles?.forEach((role) => {
        if (role.name === "admin" || role.name === "Admin") {
          setIsAdmin(true);
        }
      });
    }
  }, [user, setIsAdmin]);

  return <Route {...props} render={auth ? protectedAuth : protectedRoute} />;
};

export default ProtectedRoute;
