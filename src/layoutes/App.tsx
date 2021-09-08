import AppProvider from "./AppContext";
import { BrowserRouter as Router } from "react-router-dom";
import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "Components/Header";
import Path from "./Path";
import Navigation from "Components/Nav";
import Pages from "./Pages";
import Footer from "Components/Footer";
import "../sass/app.scss";

const App = () => {
  return (
    <AppProvider>
      <Router basename={process.env.PUBLIC_URL}>
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
    </AppProvider>
  );
};

export default App;
