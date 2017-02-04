import React from 'react';

import styles from './styles.css';

import Anchor from '../../../anchor';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const FeedApp = ({feed}) => {
	return (
		<section className={styles.wrap}>
      <ul className={styles.list}>
  			{feed.map((post, index) => (
          <li key={index}>
            <Link to={`/post/${post.slug}`}>
              <div className={styles.postcard}>
                <h4 className={styles.posttitle}>{post.title}</h4>
                <p className={styles.postlede}>
                  {post.lede && post.lede.substring(0, 65) + '...'}
                </p>
                <p className={styles.posttime}>Publication Date: {`${post.day} of ${post.month}, ${post.year}`}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
		</section>
	)
};

export default FeedApp;
