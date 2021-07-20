import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Header from "./Header";
import Path from "./Path";
import Navigation from "./Navigation";
import Pages from "./Pages";
import Footer from "./Footer";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <section className="path">
            <Path />
          </section>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Pages />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
