import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar/Navbar';

// import all pages for routes
import Home from './pages/home/Home';
import CreateAccount from './pages/createAccount/CreateAccount';
import Find from './pages/findOpportunities/Find';
import Login from './pages/login/Login';
import Registry from './pages/blog/Blog';
import SearchRegistry from './pages/resources/Resources';
import Shop from './pages/shop/Shop';
import NavbarHome from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          {/* Navbar Here (so we can route to other pages) */}
          <NavbarHome />

          <h1>This is the Gathered Here Registry App.</h1>

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/CreateAccount" component={CreateAccount}></Route>
          <Route exact path="/Find" component={Find}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Registry" component={Registry}></Route>
          <Route exact path="/SearchRegistry" component={SearchRegistry}></Route>
          <Route exact path="/Shop" component={Shop}></Route>

          {/* Footer Here */}

        </div>
      </Router>
    );
  }
}

export default App;
