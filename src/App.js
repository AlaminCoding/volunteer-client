import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Profile from "./components/Profile/profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Admin from "./components/Admin/admin";
export const UserContext = createContext();
function App() {
  const [user, setUser] = useState({
    islogin: false,
    fullname: "",
    email: "",
    error: "",
  });
  const [userService, setUserService] = useState([]);
  return (
    <React.Fragment>
      <UserContext.Provider
        value={{
          userPass: [user, setUser],
          servicePass: [userService, setUserService],
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/register/:service">
              <Register />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route path="/admin">
              <Admin />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
