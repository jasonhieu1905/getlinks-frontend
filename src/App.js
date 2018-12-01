import React, { Component } from 'react';
import './css/App.css';

import Introduction from './components/Introduction/Introduction';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Articles from './containers/Articles/Articles';
import Article from './containers/Articles/Article/Article';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './components/404/404';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Introduction />
        <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/articles/:id" component={Article}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />

      </div>

    );
  }
}

export default App;
