import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Main from "./components/AuthTestOne/Main";
import Secret from "./components/AuthTestOne/Secret";
import NotFound from "./components/AuthTestOne/NotFound";
import Callback from "./components/AuthTestOne/Callback";
import Auth from "./Auth";

// import all pages for routes

import Home from './pages/home/Home';
import Find from './pages/find/Find';
import Login from './pages/login/Login';
import SignUp from './pages/signUp/SignUp';
import Resources from './pages/resources/Resources';
import Blog from './pages/blog/Blog';
import NavbarHome from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    let mainComponent = ""
    switch (this.props.location) {
      case "":

        mainComponent = <Main {...this.props} />

        break;
      case "callback":
        mainComponent = <Callback />
        break;
      case "secret":
        this.props.auth.isAuthenticated ? mainComponent = <Secret {...this.props}></Secret> : mainComponent = <NotFound {...this.props} />
        // switch (this.props.auth.isAuthenticated) {
        // case true:
        // mainComponent = < Secret {...this.props} />
        // break;
        // case false:
        // mainComponent = <NotFound {...this.props} />

        break;
      default:
        mainComponent = <NotFound {...this.props} />
    }

    return (

      <Router>
        <div>

          <NavbarHome />

          <h1>This is the Gathered Here Registry App, {this.rops.name}.</h1>
          {mainComponent}

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Blog" component={Blog}></Route>
          <Route exact path="/FindOpportunities" component={Find}></Route>
          <Route exact path="/Resources" component={Resources}></Route>

          <Footer />

        </div>
      </Router>
    );

  }
}

export default App;