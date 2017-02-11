import React, {Component} from 'react';
import Helmet from "react-helmet";
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
          <Helmet title={this.state.post.title} />
          <header className={styles.header}>
            <h2 className={styles.postTitle}>{this.state.post.title}</h2>
            <h4 className={styles.postDate}>Published: {`${this.state.post.day} of ${this.state.post.month}, ${this.state.post.year}`}.</h4>
          </header>
          <section className={styles.section}>
            <h4 className={styles.postTags}>Tags:</h4><br/>
            {this.state.post.tags.map((tag, index) => (
              <span className={styles.tag} key={index}><Link to={`/blog/tags/#${tag}`}>{tag}</Link></span>
            ))}
          </section>
          <PostRenderer post={this.state.post} />
        </div>
      ) : (
        <div className={styles.loading}></div>
      )}
    </section>
  )
}

export default Post;
