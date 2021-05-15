import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";
import Add from "./components/Add";
import './lib/font-awesome/css/all.min.css'

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
  <GlobalProvider>
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <WatchList />
        </Route>
        <Route exact path="/watched">
          <Watched />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
   </GlobalProvider>
  );
}

export default App;
