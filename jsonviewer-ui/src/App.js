import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
      </div>
    </Router>
  );
};

export default App;
