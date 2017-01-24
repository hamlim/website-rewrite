import React from 'react';

import Anchor from '../../anchor';

import styles from './logo.css';


const Logo = (props) => (
  <Anchor to="/" className={styles.link}>
    <h1 className={styles.header}>
      Matt <span className={styles.second}>Hamlin</span>
    </h1>
  </Anchor>
);

export default Logo;
