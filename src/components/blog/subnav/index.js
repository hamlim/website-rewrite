import React from 'react';

import styles from './styles.css';

import Anchor from '../../anchor';

const Link = ({to, children, active}) => (
  <Anchor to={to} className={active ? styles.activelink : styles.link }>
    {children}
  </Anchor>
);

const Subnav = ({variation}) => {
  if (variation === "Blog") {
    return (
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Link to="/blog" active>Blog</Link>
          <Link to="/blog/feed">Feed</Link>
          <Link to="/blog/tags">Tags</Link>
        </div>
      </nav>
    )
  } else if (variation === "Feed") {
    return (
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Link to="/blog">Blog</Link>
          <Link to="/blog/feed" active>Feed</Link>
          <Link to="/blog/tags">Tags</Link>
        </div>
      </nav>
    )
  } else if (variation === "Tags") {
    return (
      <nav className={styles.nav}>
        <div className={styles.wrapper}>
          <Link to="/blog">Blog</Link>
          <Link to="/blog/feed">Feed</Link>
          <Link to="/blog/tags" active>Tags</Link>
        </div>
      </nav>
    )
  }
};

export default Subnav;
