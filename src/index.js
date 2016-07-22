import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';


function fetchch(path, option) {
  const DefaultFetchOption = {
  };
  const URLBase = 'http://localhost:3000';

  const opt = Object.assign({}, DefaultFetchOption, option);
  const url = `${URLBase}${path}`;
  return fetch(url, opt);
}

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
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    (async () => {
      const resp = await fetchch('/posts', {});
      const posts = await resp.json();
      this.setState({
        posts: posts,
      });
      console.log(this.state.posts);
    })();
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h2>News</h2>
        <ul>
          {
            this.state.posts.map((post) => {
              return <li>{post.value}</li>
            })
          }
        </ul>
      </div>
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
