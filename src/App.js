import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import MoviesDescription from "./containers/MoviesDescription";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/moviesdetails">
            <MoviesDescription />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
