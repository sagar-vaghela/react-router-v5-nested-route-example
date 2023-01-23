import { Route, Switch } from "react-router-dom";
import Content from "./Content";
import Nav from "./Nav";

export default function Catalog() {
  return (
    <div className="two-column">
      <Nav />
      <div className="content">
        <Switch>
          <Route path="/catalog/:id">
            <Content />
          </Route>
          <Route>
            <p>Use the left nav to select a catalog item</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
