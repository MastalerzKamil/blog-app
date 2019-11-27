import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography
} from '@material-ui/core';
import AddCommentForm from './AddCommentForm';
import { ConfirmDialog } from '..';

const AddComment = (props) => {
  const { openedDialog, handleClose } = props;

  const [addedComment, setAddedComment] = React.useState(false);
  const [formsData, setFormsData] = React.useState({
    name: '',
    email: '',
    body: '',
  })

  const validateForm = () => {
    return (
      formsData.name !== '' &&
      formsData.body !== '' &&
      formsData.email.indexOf('@') !== -1
    );
  };

  const handleChange = name => event => {
    setFormsData({
      ...formsData,
      [name]: event.target.value,
    });
  };

  const handleCloseConfirmDialog = () => {
    setAddedComment(false);
  };

  const handleAddComment = () => {
    const isValid = validateForm();
    if(isValid) {
      setAddedComment(true);
      handleClose();
    }
  }

  if(addedComment) {
    return (
      <ConfirmDialog
        handleClose={handleCloseConfirmDialog}
        openedDialog={addedComment}
      >
        <Typography variant="h3" gutterBottom>
          Comment has been added
        </Typography>
      </ConfirmDialog>
    )
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