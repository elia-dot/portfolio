import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "animate.css/animate.min.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/GlobalStyles";
import Footer from "./components/Footer";

const Main = styled.section`
  padding: 2em;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 950px) {
    width: 100%;
    padding: 0.5em;
  }
`;

function App() {
  return (
    <Router>
      <Main>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
