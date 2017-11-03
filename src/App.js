import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';
import Home from './Home/Home';
import Footer from './Main/Footer';
import Header from './Main/Header';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} /> */}
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
