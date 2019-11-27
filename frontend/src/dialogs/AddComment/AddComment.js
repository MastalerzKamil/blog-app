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
import AddCommentForm from './AddCommentForm';

const AddComment = (props) => {
  const { openedDialog, handleClose } = props;

  const [addedComment, setAddedComment] = React.useState(false);
  const [formsData, setFormsData] = React.useState({
    name: '',
    email: '',
    body: '',
  })

  const validateForm = () => {
    return formsData.name !== ''
    && formsData.body !== ''
    && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formsData.email)
  }

  const handleChange = name => event => {
    setFormsData({
      ...formsData,
      [name]: event.target.value,
    });
  };

  const handleAddComment = () => {
    if(validateForm()) {
      // TODO send comment
      setAddedComment(true);
    }
  }

  if(addedComment) {
    return null;  //TODO ADD confirm modal
  }

  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => handleClose()}
      open={openedDialog}
    >
      <DialogTitle id="comment-add-post">Add comment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Add comment
        </DialogContentText>
        <AddCommentForm handleChange={handleChange} formsData={formsData} />
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          onClick={() => handleClose()}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          onClick={() => handleAddComment()}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddComment.defaultProps = {
  openedDialog: false
}

AddComment.propTypes = {
  openedDialog: PropTypes.bool,
  handleClose: PropTypes.func.isRequired,
}

export default AddComment;