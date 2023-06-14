import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import NewPostForm from './NewPostForm';


const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((json) => {
        !ignore && setPosts(json);
      })
      .catch((error) => console.error('Error fetching posts:', error));

    return () => {
      ignore = true;
    };
  }, []);

  const addPost = (newPost) => {
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(() => {
        fetch('http://localhost:3000/') // refetching posts after adding a new post
          .then((response) => response.json())
          .then((json) => setPosts(json))
          .catch((error) => console.error('Error fetching posts:', error));
      })
      .catch((error) => console.error('Error adding post:', error));
  };

  return (
    <div>
       <Typography variant="h2">Posts:</Typography>
       <List>
       {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText>
              <Typography variant="h3">{post.title}</Typography>
              <Typography variant="body1">{post.body}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
      <NewPostForm addPost={addPost} />
    </div>
  );
};

export default PostList;
