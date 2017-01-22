import React from 'react';

import Header from '../header/header';

import styles from './home.css';

const Home = () => (
  <div className="Home">
    <Header page="Home" />
    <section className={styles.container}>
      <p>test</p>
    </section>
  </div>
);

export default Home;
