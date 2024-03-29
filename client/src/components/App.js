import React, { Component } from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Libraries from "./pages/Libraries";
import AddCountry from "./pages/AddCountry";
import Secret from "./pages/Secret";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import api from "../api";
import logo from "../logo.svg";
import SimpleMap from "./pages/SimpleMap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    // api.loadUser();
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">LibSeat</h1>
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/libraries">Libraries</NavLink>
          <NavLink to="/map"> Map </NavLink>
          <NavLink to="/add-country">Add country</NavLink>
          {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
          {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
          {api.isLoggedIn() && (
            <Link to="/" onClick={e => this.handleLogoutClick(e)}>
              Logout
            </Link>
          )}
          <NavLink to="/secret">Secret</NavLink>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/map" component={SimpleMap} />
          <Route path="/libraries" component={Libraries} />
          <Route path="/add-country" component={AddCountry} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    );
  }
}

export default App;
