import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import "./styles.css";
import Welcome from "./Welcome";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route>
            <Layout />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
