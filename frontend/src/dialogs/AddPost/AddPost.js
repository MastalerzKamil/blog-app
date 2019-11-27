import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@material-ui/core';
import * as api from 'common/api';

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
    if(validateForm()) {
      api.addPost(formsData);
      setAddedPost(true);
    }
  }

  if(addedPost) {
    return null;  //TODO ADD confirm modal
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
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={() => handleClose()}
        >
          Anuluj
        </Button>
        <Button
          color="primary"
          onClick={() => handleAddPost()}
        >
          Dodaj
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