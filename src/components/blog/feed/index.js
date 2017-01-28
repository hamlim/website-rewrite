import React from 'react';


import Anchor from '../../anchor';
import Header from '../../header/header';
import Subnav from '../subnav';

import styles from './feed.css';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const Feed = (props) => (
  <section className="Feed">
    <Header page="Feed" />
    <Subnav variation="Feed"/>
    <div className={styles.wrapper}>
      <h2>Feed</h2>
    </div>
  </section>
);

export default Feed;
