import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.scss"


function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
