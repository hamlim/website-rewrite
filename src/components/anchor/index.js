import React from 'react';
import {Link} from 'react-router';


const Anchor = ({isActive, children, ...props}) => (
  <Link className={isActive ? styles.active : styles.link} {...props}>{children}</Link>
);

export default Anchor;
