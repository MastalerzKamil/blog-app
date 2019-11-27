import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TextField
} from '@material-ui/core';

const AddPostForm = (props) => {
  const { formsData, handleChange } = props;
  return (
    <div>
      <TextField
        autoFocus
        fullWidth
        id="post-title"
        label="Title"
        margin="dense"
        onChange={handleChange('title')}
        type="text"
        value={formsData.title}
      />
      <TextField
        autoFocus
        fullWidth
        id="post-body"
        label="Body"
        margin="dense"
        type='text'
        placeholder="Describe your post"
        multiline={true}
        rows={2}
        rowsMax={8}
        onChange={handleChange('body')}
        value={formsData.body}
      />
    </div>
  );
}

AddPostForm.propTypes = {
  formsData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AddPostForm;