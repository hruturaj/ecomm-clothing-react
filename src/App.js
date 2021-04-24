import "./App.css";
import React from "react";
import { connect } from "react-redux";

import { HomePage } from "./pages/homePage/homePage-component.jsx";
import { Route, Switch } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop-component.jsx";
import Header from "./components/header/header.component.jsx";
import { signIn_signUp } from "./pages/signIn-signUp/signIn-signUp.component.jsx";
import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utils";
import setCurrentUser from "./redux/user/user.actions.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={signIn_signUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
