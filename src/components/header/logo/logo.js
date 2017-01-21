import React from 'react';

import { Link } from 'react-router';

import styles from './logo.css';


const Logo = (props) => (
  <Link to="/" className={styles.link}>
    <h1 className={styles.header}>
      <svg className={styles.wrapper} viewBox="0 0 32 32" height="32" width="32">
        <path className={styles.mBack} d="M32 0 L32 32 L0 32 Z"></path>
        <path className={styles.mFront} d="M0 0 L32 32 L0 32 Z"></path>
      </svg>
      <svg className={styles.wrapper} viewBox="0 0 32 32" height="32" width="32">
        <path className={styles.hBack} d="M0 0 L6 0 L12 32 L0 32 Z M20 0 L32 0 L32 32 L22 32 Z"></path>
        <path className={styles.hFront} d="M32 0 L32 20 L0 32 L0 12 Z"></path>
      </svg>
      <span className={styles.name}>Matt Hamlin</span>
    </h1>
  </Link>
);

export default Logo;
