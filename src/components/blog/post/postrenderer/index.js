import React, {Component} from 'react';
import 'whatwg-fetch';
import marked from 'marked';

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
    console.log(this.state);
  }
  render = () => (
    <article dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></article>
  )
};

export default PostRenderer;
