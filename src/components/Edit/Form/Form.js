import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/SaveRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Tooltip from '@material-ui/core/Tooltip';
import classes from './Form.css';

// const styles = {
//   root: {
//     textAlign: 'center'
//   },
//
//   btnBox : {
//     display: 'flex',
//     justifyContent: 'center',
//   },
//
//   btn: {
//     margin: 20,
//     minWidth: '30px',
//     width: '35px',
//     height: '35px',
//   }
// }

function Transition(props) {
  return <Slide direction="down" {...props} />;
}


const FormTask = (props) => {
  const {classes} = props;
  return (
    <div>
      <Dialog
        fullWidth="yes"
        maxWidth="xs"
        open={props.open}
        onClose={props.close}
        className={classes.root}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}>

        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent id="alert-dialog-description">
          {props.children}
        </DialogContent>
        <DialogActions className={classes.btnBox}>
          <Tooltip disableFocusListener disableTouchListener title="Save" placement="right">
            <Button variant="fab" color="primary" aria-label="Save" className={classes.btn} onClick={props.save}>
              <SaveIcon/>
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener disableTouchListener title="Delete" placement="left">
            <Button variant="fab" color="primary" aria-label="Delete" className={classes.btn} onClick={props.delete}>
              <DeleteRoundedIcon />
            </Button>
          </Tooltip>
        </DialogActions>

      </Dialog>
    </div>
  );
}

export default withStyles(classes)(FormTask);
