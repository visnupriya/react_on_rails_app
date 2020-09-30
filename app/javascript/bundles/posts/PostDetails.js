import React from 'react';
import { Link } from 'react-router-dom';

export default class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

  componentDidMount() {
    console.log("test componentDidMount")
    console.log(this.props);
    const { match: { params: { id } } } = this.props;
    fetch(`/api/v1/posts/${id}`).
      then((response) => response.json()).
      then((post) => this.setState({ post }));
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <div>
          <label> Title: </label>
          <p> {post.title} </p>
        </div>

        <div>
          <label> Description: </label>
          <p> {post.description} </p>
        </div>

        <div>
          <label> Is Published: </label>
          <p> {post.is_published} </p>
        </div>
        <div>
          <Link to={`/posts/${post.id}/edit`}>
            Edit
          </Link>
        </div>
      </div>
    );
  }
}