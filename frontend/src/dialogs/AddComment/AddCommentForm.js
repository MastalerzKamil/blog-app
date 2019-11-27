import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TextField
} from '@material-ui/core';

const AddCommentForm = (props) => {
  const { formsData, handleChange } = props;
  return (
    <div>
      <TextField
        autoFocus
        fullWidth
        id="comment-title"
        label="Title"
        margin="dense"
        onChange={handleChange('title')}
        type="text"
        value={formsData.title}
      />
      <TextField
        autoFocus
        fullWidth
        id="comment-title"
        label="Email"
        margin="dense"
        onChange={handleChange('email')}
        type="text"
        value={formsData.email}
      />
      <TextField
        autoFocus
        fullWidth
        id="comment-body"
        label="Body"
        margin="dense"
        type='text'
        placeholder="Describe your comment"
        multiline={true}
        rows={2}
        rowsMax={8}
        onChange={handleChange('body')}
        value={formsData.body}
      />
    </div>
  );
}

AddCommentForm.propTypes = {
  formsData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AddCommentForm;