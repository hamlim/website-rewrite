import React, {Component} from 'react';
import 'whatwg-fetch';

import styles from './styles.css';

var md = require('markdown-it')()
  .use(require('markdown-it-task-checkbox'),{
    disabled: true,
    ulClass: 'task-list',
    liClass: 'task-list-item'
  });

class PostRenderer extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }
  state = {
    loading: true,
    markdown: ''
  }
  componentDidMount = () => {
    let postUrl = `/raw/${this.props.post.year}/${this.props.post.month}/${this.props.post.content}`;
    fetch(postUrl).then(data => {
      return data.text();
    }).then(md => {
      this.setState({
        loading: false,
        markdown: md
      });
    }).catch(err => console.warn(err));
  }
  render = () => (
    <article className={styles.article} dangerouslySetInnerHTML={{ __html: md.render(this.state.markdown) }}></article>
  )
};

export default PostRenderer;
