import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import history from './history';

import Home from './views/Home.jsx';
import Header from './cmps/header/Header.jsx';
import Footer from './cmps/footer/Footer.jsx';

function App() {
  return (
    <div> 
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
