import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Carousel from './components/Carousel';

import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About'; // Import the About component
import Locations from './components/Locations'; // Import the Locations component
import Signup from './components/Signup'; // Import the Signup component



const MainContent = () => {
  return (
    <div>
      <Banner />
      {/* <Sliders /> */}
      <Carousel />
      <Main />
    </div>
  );
};


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={MainContent} />
            <Route path="/about" component={About} />
            <Route path="/locations" component={Locations} />
            <Route path="/signup" component={Signup} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;