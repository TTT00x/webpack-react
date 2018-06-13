import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import News from './components/News'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
        </div>
      </Router>
    );
  }
}
export default App;
