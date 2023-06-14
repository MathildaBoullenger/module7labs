import React, { useState } from "react";
import { TextField, Button } from '@mui/material';

const NewPostForm = ({ addPost }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addPost({ id: title + body, title, body });
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          multiline
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Post
        </Button>
      </form>
    );
  };

export default NewPostForm;
