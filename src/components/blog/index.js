import React from 'react';

import Anchor from '../anchor';
import Header from '../header/header';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const Blog = (props) => (
  <div className="Blog">
    <Header page="Blog" />
      <article className={styles.wrapper}>
        <section>
          <h2 className={styles.lead}>
            Welcome to my blog. I write about a lot of different things, I suggest checking out my <Link to="/blog/tags">tags</Link>.
          </h2>
          <div className={`${styles.lead} ${styles.body}`}>
            <p>
              I make small <Link to="/projects">side projects</Link> of all kinds in my free time, and work
              with some pretty smart people at Wayfair currently.
            </p>
            <p>
              I also write quite a bit about a ton of things like <Link to="/tags/#development">Development</Link>
            , <Link to="/tags/#daily">Daily</Link> content, as well as a lot of <Link to="/tags/#random">Random</Link> things.
            </p>
          </div>
        </section>
      </article>
  </div>
);


export default Blog;
