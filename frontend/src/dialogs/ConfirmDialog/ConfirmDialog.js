import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button
} from '@material-ui/core';
import { PropTypes } from 'prop-types';

const ConfirmDialog = (props) => {
  const { children, openedDialog, handleClose } = props;
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      onClose={() => handleClose()}
      open={openedDialog}
    >
      <DialogTitle id="dialog-add-post">Succeeded</DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          onClick={()=>handleClose()}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmDialog.defaultProps ={
  openedDialog: false,
}

ConfirmDialog.propTypes = {
  children: PropTypes.node.isRequired,
  openedDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default ConfirmDialog;