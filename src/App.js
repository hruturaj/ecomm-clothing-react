import "./App.css";
import { HomePage } from "./pages/homePage/homePage-component.jsx";
import { Route, Switch, Link } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop-component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
