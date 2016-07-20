import 'babel-polyfill';
var React = require('react');
var ReactDOM = require('react-dom');

class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-default navbar-fixed-top">
        <p className="navbar-brand">Maze</p>
      </header>
    );
  }
}

ReactDOM.render(
  (
    <div>
      <Header></Header>
      <div className="container" style={{paddingTop: '60px'}}>
        <h1>Hello!</h1>
      </div>
    </div>
  ),
  document.getElementById('react-main')
);
