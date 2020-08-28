import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

import HomePage from "./views/HomePage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
