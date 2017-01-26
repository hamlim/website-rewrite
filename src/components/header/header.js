import React from 'react';
import Anchor from '../anchor';

import Logo from './logo/logo';

import styles from './header.css';

const Header = (props) => (
  <header className={styles.header}>
    <span className={styles.wrapper}>
      <Logo />
      <Anchor to="/projects" className={styles.projectslink}>Projects</Anchor>
      <Anchor to="/blog" className={styles.bloglink}>Blog</Anchor>
    </span>
    <span className={styles.pagename}>
      {props.page}
    </span>
  </header>
);

export default Header;
