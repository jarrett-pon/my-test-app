import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Graphdata from 'graph-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Graphdata graphdata='{"labels":["May","June","July","August","September","October","November","December","January","February","March","April","May","June","July"],"datasets":[{"label":["Google organic referrals"],"borderColor":["rgba(255, 0, 0, 1)"],"backgroundColor":["rgba(255, 255, 255, 0)"],"data":["21280940","26039230","30288282","28679481","24482326","24146618","24887769","29513074","28857876","27850754","32722568","30559119","30649938","32646344","28608123"]}]}'
          graphtype="line"
          caption="funtime"/>
      </div>
    );
  }
}

export default App;
