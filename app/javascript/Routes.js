import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HelloWorld from './bundles/HelloWorld/components/HelloWorld';
import Posts from './bundles/posts/index';
import PostDetails from './bundles/posts/PostDetails';
import CreatePost from './bundles/posts/CreatePost';
import UpdatePost from './bundles/posts/UpdatePost';

export default () => {
  return (
    <Switch>
      <Route path="/hello_world">
        <h3>Hello World Component</h3>
      </Route>
      <Route path="/bye_world">
        <h3>Bye World Component</h3>
      </Route>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route 
        path="/posts/:id"
        exact
        component={PostDetails}
       />
      <Route
        path="/posts/new"
        exact
        component={CreatePost}
      />
      <Route
        path="/posts/:id/edit"
        exact
        component={UpdatePost}
      />
    </Switch>
  );
}