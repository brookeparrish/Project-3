import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/AuthTestOne/Main"
import Secret from "./components/AuthTestOne/Secret"
import NotFound from "./components/AuthTestOne/NotFound"
import Callback from "./components/AuthTestOne/Callback"
import Auth from "./Auth"


import Home from './pages/home/Home';
import CreateAccount from './pages/createAccount/CreateAccount';
import Find from './pages/find/Find';
import Login from './pages/login/Login';
import Registry from './pages/registry/Registry';
import SearchRegistry from './pages/searchRegistry/SearchRegistry';
import Shop from './pages/shop/Shop';
import NavbarHome from "./components/Navbar/Navbar";


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
      <div>
        <h1>This is the Gathered Here Registry App, {this.props.name}.</h1>

        {mainComponent}
      </div >
    );

  }
}

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>

//           {/* Navbar Here (so we can route to other pages) */}
//           <NavbarHome />

//           <h1>This is the Gathered Here Registry App.</h1>

//           <Route exact path="/" component={Home}></Route>
//           <Route exact path="/CreateAccount" component={CreateAccount}></Route>
//           <Route exact path="/Find" component={Find}></Route>
//           <Route exact path="/Login" component={Login}></Route>
//           <Route exact path="/Registry" component={Registry}></Route>
//           <Route exact path="/SearchRegistry" component={SearchRegistry}></Route>
//           <Route exact path="/Shop" component={Shop}></Route>

//           {/* Footer Here */}

//         </div>
//       </Router>
//     );
//   }
// }




export default App;