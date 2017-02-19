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
        return `<pre class="hljs"><code data-lang="${lang}">${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }
    return `<pre class="hljs"><code data-lang="${lang}">${md.utils.escapeHtml(str)}</code></pre>`;
  }
}).use(require('markdown-it-task-checkbox'),{
  disabled: true,
  ulClass: 'task-list',
  liClass: 'task-list-item'
}).use(require('markdown-it-footnote'))
.use(require('markdown-it-deflist'))
.use(require('markdown-it-inline-comments'));
//.use(require('markdown-it-jsx'));

class PostRenderer extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }
  state = {
    loading: true,
    markdown: '',
    error: false
  }
  componentDidMount = () => {
    let postUrl = `/raw/${this.props.post.year}/${this.props.post.month}/${this.props.post.content}.md`;
    fetch(postUrl).then(data => {
      return data.text();
    }).then(md => {
      if (md.includes('<!DOCTYPE html>')) {
        this.setState({
          error: 'Article doesn\'t exist. Routing you back to where you came from. 👋🏼'
        });
        window.setTimeout(_ => window.history.back(), 15000);
      }
      this.setState({
        loading: false,
        markdown: md
      });
    }).catch(err => console.warn(err));
  }
  render = () => (
    <div>
      {this.state.error && (<h1 className={styles.error}>{this.state.error}</h1>)}
      <article className={styles.article} dangerouslySetInnerHTML={{ __html: md.render(this.state.markdown) }}></article>
    </div>
  )
};

export default PostRenderer;
