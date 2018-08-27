import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled, { injectGlobal } from 'styled-components';

import SelectorWrapper from "./components/SelectorWrapper";
import ImageWithOverlayWrapper from "./components/ImageWithOverlayWrapper";

injectGlobal`
  body {
    text-align: center;
    width: 80%;
    max-width: 600px;
    margin: 2rem auto;
    font-family: "Helvetica Neue";
  }
`;

const Subtitle = styled.h2`
  font-style: italic;
`;

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Phil</h1>
        <Subtitle>Petri Hänninen's Interface Library</Subtitle>
        <p>Small React components that tend to be used from project to project</p>
      </div>
    );
  }
}

const Content = styled.main`
  margin-top: 3rem;
  & * {
    text-align: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-around;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/selector">Selector</Link>
          <Link to="/image-with-overlay">Image with Overlay</Link>
        </Navigation>

        <Content>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/selector" component={SelectorWrapper} />
          <Route exact path="/image-with-overlay" component={ImageWithOverlayWrapper} />
        </Content>
      </div>
    );
  }
}



export default hot(module)(App);
