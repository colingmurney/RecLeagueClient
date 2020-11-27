import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";

function App() {
  return (
    <main className="container-fluid">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </main>
  );
}

export default App;
