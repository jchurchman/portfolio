import React, { Component } from 'react';
import Navigate from './Navigate/Navigate';
import { 
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
          <header className="App-header">
            <h1 className="App-title">Joe Churchman</h1>
            <Navigate />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
          <footer className="App-footer">
          </footer>
      </Router>
    );
  }
}

export default App;
