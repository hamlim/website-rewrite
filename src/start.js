import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/home/home';
import Projects from './components/projects';
import Blog from './components/blog';

import Tags from './components/blog/tags';
import Feed from './components/blog/feed';
import Years from './components/blog/years';
import Months from './components/blog/months';
import Post from './components/blog/post';

import './start.css';

const Website = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={Blog}/>
      <Route path="/blog/tags" component={Tags}/>
      <Route path="/blog/feed" component={Feed} />
      <Route path="/blog/years" component={Years}/>
      <Route path="/blog/months" component={Months}/>
      <Route path="/blog/post/:postTitle" component={Post}/>
    </Router>
  )
};

export default Website;
