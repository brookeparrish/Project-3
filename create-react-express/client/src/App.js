import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/AuthTestOne/Main"
import Secret from "./components/AuthTestOne/Secret"
import NotFound from "./components/AuthTestOne/NotFound"
import Callback from "./components/AuthTestOne/Callback"
import Auth from "./Auth"

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
        switch (this.props.auth.isAuthenticated) {
          case true:
            mainComponent = <Secret {...this.props} />
            break;
          case false:
            mainComponent = <NotFound {...this.props} />

        }

        break;
      default:
        mainComponent = <NotFound {...this.props} />
    }

    return (
      <div>
        <h1>This is the Gathered Here Registry App, {this.props.name}.</h1>

        {mainComponent}
      </div>
    );
  }
}

export default App;