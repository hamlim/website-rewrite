import React from 'react';
import {Link} from 'react-router';

import styles from './anchor.css';

const Anchor = (props) => (
  <Link {...props} activeClassName={styles.active} />
);

export default Anchor;
