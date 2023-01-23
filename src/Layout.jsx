import { Route, Switch } from "react-router-dom";
import Catalog from "./Catalog";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

export default function Layout() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/catalog">
          <Catalog />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
