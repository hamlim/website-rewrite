import React from 'react';

import Header from '../header/header';
import Anchor from '../anchor';

import styles from './home.css';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const Home = () => (
  <div className="Home">
    <Header page="Home" />
    <article className={styles.wrapper}>
      <section>
        <h2 className={styles.lead}>
          Hello. I am Matt Hamlin, a developer, designer (kinda), and also a pretty terrible writer.
        </h2>
        <div className={`${styles.lead} ${styles.body}`}>
          <p>
            I make small <Link to="/projects">side projects</Link> of all kinds in my free time, and work
            with some pretty smart people at Wayfair currently.
          </p>
          <p>
            I also write quite a bit about a ton of things like <Link to="/blog/tags/#development">Development</Link>
          , <Link to="/blog/tags/#daily">Daily</Link> content, as well as a lot of <Link to="/blog/tags/#random">Random</Link> things.
          </p>
        </div>
      </section>
    </article>
  </div>
);

export default Home;
