import React from 'react';

import Header from '../header/header';
import Anchor from '../anchor';

import styles from './home.css';

const Home = () => (
  <div className="Home">
    <Header page="Home" />
    <article className={styles.wrapper}>
      <section>
        <h2 className={styles.lead}>
          Hello. I am Matt Hamlin, a developer, designer (kinda), and also a pretty terrible writer.
        </h2>
        <div className={`${styles.body} ${styles.container}`}>
          <p>
            I make small <Anchor to="/projects" className={styles.link}>side projects</Anchor> of all kinds in my free time, and work
            with some pretty smart people at Wayfair currently.
          </p>
        </div>
      </section>
    </article>
  </div>
);

export default Home;
