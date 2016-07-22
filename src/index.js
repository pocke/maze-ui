import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-default navbar-fixed-top">
        <p className="navbar-brand">Maze</p>
      </header>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <h1>Hello React!</h1>
    )
  }
}

ReactDOM.render(
  (
    <div>
      <Header></Header>
      <div className="container" style={{paddingTop: '60px'}}>
        <Router history={browserHistory}>
          <Route path="/" component={App}/>
        </Router>
      </div>
    </div>
  ),
  document.getElementById('react-main')
);
