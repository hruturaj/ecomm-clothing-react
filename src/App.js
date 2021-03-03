import "./App.css";
import { HomePage } from "./pages/homePage/homePage-component.jsx";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
