import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import MoviesDescription from "./containers/MoviesDescription";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/movie/:id">
          <MoviesDescription />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
