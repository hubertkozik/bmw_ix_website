import MainView from "./components/MainView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FactsView from "./components/FactsView";
import InfoView from "./components/InfoView";
import Gallery from "./components/Gallery";
import FormView from "./components/FormView";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainView />
          <FactsView />
          <InfoView />
          <Gallery />
          <FormView />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
