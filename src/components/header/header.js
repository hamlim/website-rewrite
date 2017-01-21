import React from 'react';
import {Anchor} from '../anchor';

import styles from './header.css';

const Header = (props) => (
  <header className={styles.header}>
    <Logo />
    <Link to="/projects">Projects</Link>

  </header>
)
