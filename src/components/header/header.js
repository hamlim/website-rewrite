import React from 'react';
import Anchor from '../anchor';

import Logo from './logo/logo';

import styles from './header.css';

const Header = (props) => (
  <header className={styles.header}>
    <Logo />
    <Anchor to="/projects" className={styles.projectslink}>Projects</Anchor>
    <Anchor to="/Blog" className={styles.bloglink}>Blog</Anchor>
    <span className={styles.pagename}>
      {props.page}
    </span>
  </header>
);

export default Header;
