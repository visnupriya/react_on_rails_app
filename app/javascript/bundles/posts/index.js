import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap'

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.fetchPostsList();
  }

  fetchPostsList = () => {
    fetch('/api/v1/posts').
      then((response) => response.json()).
      then((posts) =>  this.setState({ posts }));
  };

  handleDelete = (postId) => {
    fetch(`/api/v1/posts/${postId}`, { method: 'delete' }).
      then((response) => {
        alert('Post deleted successfully')
        this.fetchPostsList();
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <div>
          <h3 className="col-sm-6 float-left">All Posts</h3>
          <Link to="/posts/new" className="btn btn-primary float-right">Create</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Is Published</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/posts/${post.id}`}>
                      {post.title}
                    </Link>
                  </td>
                  <td>{post.description}</td>
                  <td>{post.is_published ? 'Yes' : 'No' }</td>
                  <td>
                    <button onClick={() => this.handleDelete(post.id) } className="btn btn-danger">
                      Delete
                    </button>
                    <Link to={`/posts/${post.id}/edit`} className="btn btn-success">
                      Edit
                    </Link>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}