import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router";
import { IUser } from "types/user";

const protectRoute = (
  protectEntity: any,
  url: string,
  props: any,
  Component: React.FC
) =>
  Object.keys(protectEntity).length ? (
    <Redirect to={url} />
  ) : (
    <Component {...props} />
  );

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
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => protectRoute(user, url, props, Component)}
  />
);

export default ProtectedRoute;
