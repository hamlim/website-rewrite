import React from 'react';


import Anchor from '../../anchor';
import Header from '../../header/header';
import Subnav from '../subnav';

import styles from './tags.css';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const Tags = (props) => (
  <section className="Tags">
    <Header page="Tags" />
    <Subnav variation="Tags"/>
    <div className={styles.wrapper}>
      <h2>Tags</h2>
    </div>
  </section>
);

export default Tags;
