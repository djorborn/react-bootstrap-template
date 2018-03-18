import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light" />
        <div className="container">
          <div className="jumbotron">
            <h1 className="display4">Hello React!!</h1>
            <p className="lead">My React/Webpack/Scss/Bootstrap template </p>
            <hr className="my-4" />
            <p>It is a very basic configuration, no shinny stuff.</p>
            <p className="lead">I am new to webpack so it might be wrong but is is working so.. Yay!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
