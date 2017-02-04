import React from 'react';

import styles from './styles.css';

import Anchor from '../../../anchor';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const TagApp = ({feed}) => {
  let tagSet = new Set();
	feed.forEach(post => {
		if (post.tags) {
			for (let tag of post.tags) {
				if (tag != undefined) {
					tagSet.add(tag);
				}
			}
		}
	});
	let tagArr = [...tagSet];
	return (
		<section className={styles.wrap}>
			{tagArr.map((tag, index) => {
				return (
					<ul key={index} className={styles.list}>
						<h4 id={tag.toLowerCase()} className={styles.header}>{tag}</h4>
						{feed.map((post, index) => {
							if (post.hasOwnProperty('tags') && post.tags.includes(tag)) {
								return (
									<li key={index}><Link to={`/post/${post.slug}`}>{post.title}</Link></li>
								);
							}
						})}
					</ul>
				);
			})}
		</section>
	)
};

export default TagApp;
