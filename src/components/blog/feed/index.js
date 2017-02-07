import React, {Component} from 'react';
import 'whatwg-fetch';

import Anchor from '../../anchor';
import Header from '../../header/header';
import Subnav from '../subnav';
import FeedApp from './feedapp';

import styles from './feed.css';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

class Feed extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }

  state = {
    feed: []
  }

  componentDidMount = () => {
    fetch('/assets/json/posts.json').then(r => {
      return r.json();
    }).then(feed => {
      this.setState({feed});
    }).catch(err => console.warn(err));
  }

  render = () => {
    let feedLengthBool = this.state.feed.length > 0;
    return (
      <section className="Feed">
        <Header page="Feed" />
        <Subnav variation="Feed" />
        <div className={styles.wrapper}>
          <h2>Feed:</h2>
          {feedLengthBool ? (
            <FeedApp feed={this.state.feed} />
          ) : (
            <div className={styles.loading}></div>
          )}
        </div>
      </section>
    )
  }
};

export default Feed;
