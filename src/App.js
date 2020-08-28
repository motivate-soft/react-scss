import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";
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
