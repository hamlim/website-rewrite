import React, {Component} from 'react';
import 'whatwg-fetch';

import Anchor from '../../anchor';
import Header from '../../header/header';
import PostRenderer from './postrenderer';

import styles from './post.css';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

class Post extends Component {
  constructor = (props) => {
    this.super(props);
    state = {
      feed: [],
      post: {}
    }
    this.setState = this.setState.bind(this);
  }

  componentDidMount = () => {
    fetch('/assets/json/posts.json').then(r => {
      return r.json();
    }).then(feed => {
      this.setState({feed});
      let post = feed.find(p => p.slug === this.props.params.slug);
      post && this.setState({post});
    }).catch(err => console.warn(err));
  }

  render = () => (
    <section className="Post">
      <Header page="Post" />
      {(this.state && this.state.post) ? (
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <h2 className={styles.postTitle}>{this.state.post.title}</h2>
            <h4 className={styles.postDate}>Published: {`${this.state.post.day} of ${this.state.post.month}, ${this.state.post.year}`}.</h4>
          </header>
          <PostRenderer post={this.state.post} />
          <footer className={styles.footer}>
            <h4 className={styles.postTags}>Tags:</h4><br/>
            {this.state.post.tags.map((tag, index) => (
              <Link to={`/blog/tags/#${tag}`} key={index}>{tag}</Link>
            ))}
          </footer>
        </div>
      ) : (
        <div className={styles.loading}></div>
      )}
    </section>
  )
}

export default Post;
