import React, {Component} from 'react';
import 'whatwg-fetch';

import styles from './styles.css';
import * as hljs from 'highlight.js';
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
}).use(require('markdown-it-task-checkbox'),{
  disabled: true,
  ulClass: 'task-list',
  liClass: 'task-list-item'
}).use(require('markdown-it-footnote'))
.use(require('markdown-it-jsx'));

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
