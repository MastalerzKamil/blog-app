import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';
import * as api from 'common/api';
import AddPostForm from './AddPostForm';
import { ConfirmDialog } from '..';

const AddPost = (props) => {
  const { openedDialog, handleClose } = props;

  const [addedPost, setAddedPost] = React.useState(false);
  const [formsData, setFormsData] = React.useState({
    title: '',
    body: '',
  })

  const validateForm = () => {
    return formsData.title !== '' && formsData.body !== '';
  }

  const handleAddPost = () => {
    const isValid = validateForm();
    if(isValid) {
      api.addPost(formsData);
      setAddedPost(true);
      handleClose();
    }
  }

  const handleChange = name => event => {
    setFormsData({
      ...formsData,
      [name]: event.target.value,
    });
  };

  const handleCloseConfirmDialog = () => {
    setAddedPost(false)
  }

  if(addedPost) {
    return (
      <ConfirmDialog handleClose={handleCloseConfirmDialog} openedDialog={addedPost}>
        <Typography variant="h3" gutterBottom>
          Post has been added
        </Typography>
      </ConfirmDialog>
    );
  }

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => handleClose()}
      open={openedDialog}
    >
      <DialogTitle id="dialog-add-post">Add post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add post
        </DialogContentText>
        <AddPostForm
          handleChange={handleChange}
          formsData={formsData}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={() => handleAddPost()}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddPost.defaultProps = {
  openedDialog: false
}

AddPost.propTypes = {
  openedDialog: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
}

export default AddPost;