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
  ...props
}) => {
  const [accessIsAllowed, setAccessIsAllowed] = useState<boolean>(false);

  const protectedRoute = useCallback(
    () => (accessIsAllowed ? <Component {...props} /> : <UnauthorizedPage />),
    [accessIsAllowed, props]
  );
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
      user.roles?.forEach((role) => {
        if (role.name === "admin" || role.name === "Admin") {
          setAccessIsAllowed(true);
        }
      });
    }
  }, [user, setAccessIsAllowed]);

  return <Route {...props} render={auth ? protectedAuth : protectedRoute} />;
};

export default ProtectedRoute;
