import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/home/home';

import Projects from './components/projects';
import Blog from './components/blog';

import './start.css';

const Website = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog} />
    </Router>
  )
};

export default Website;
