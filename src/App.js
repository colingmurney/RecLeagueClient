import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Leagues from "./containers/Leagues";
import Results from "./containers/Results";
import CaptainsReport from "./containers/CaptainsReport";
import Notifications from "./containers/Notifications";

function App() {
  return (
    <main className="container-fluid">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/leagues" component={Leagues}></Route>
        <Route path="/results" component={Results}></Route>
        <Route path="/notifications" component={Notifications}></Route>
        <Route path="/captainsreport" component={CaptainsReport}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </main>
  );
}

export default App;
