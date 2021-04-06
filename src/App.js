import "./App.css";
import React from "react";
import { HomePage } from "./pages/homePage/homePage-component.jsx";
import { Route, Switch } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop-component.jsx";
import { Header } from "./components/header/header.component.jsx";
import { signIn_signUp } from "./pages/signIn-signUp/signIn-signUp.component.jsx";
import { auth } from "../src/firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user }, () => {
        console.log(this.state.currentUser);
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={signIn_signUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
