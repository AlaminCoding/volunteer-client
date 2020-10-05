import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

function PrivateRoute({ children, ...rest }) {
  const { userPass } = useContext(UserContext);
  const [user, setUser] = userPass;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.islogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
