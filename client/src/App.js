import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tracks from './views/Tracks'
import Home from './views/Home'
import ContactUs from './views/ContactUs'
import Huts from './views/Huts'
import SignUp from './views/SignUp'
import AboutUs from './views/AboutUs'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tracks' exact component={Tracks} />
        <Route path='/about-us' exact component={AboutUs} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/huts' exact component={Huts} />
        <Route path='/sign-up' exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
