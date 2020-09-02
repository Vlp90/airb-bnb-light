import React from "react";
import "./App.css";
import Home from "./Home";
import SearchPage from "./SearchPage";

import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
        
          <Route path="/search">
          <SearchPage />
          </Route>

{/*  Always put the index in last position */}
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
