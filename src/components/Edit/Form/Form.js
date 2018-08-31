import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import SaveIcon from '@material-ui/icons/SaveRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Tooltip from '@material-ui/core/Tooltip';
import WithClass from '../../../hoc/WithClass'
import css from './Form.css';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = {
  textCenter: {
    textAlign: 'center'
  },

  btn: {
    margin: '20px',
    minWidth: '30px',
    width: '35px',
    height: '35px'
  }
}


const FormTask = (props) => {
  return (
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        style={styles.textCenter}
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}>

        <DialogTitle id="alert-dialog-title" >{props.title}</DialogTitle>
        <DialogContent id="alert-dialog-description">
          {props.children}
        </DialogContent>
        <div className={css.btnBox}>
          <Tooltip disableFocusListener disableTouchListener title="Save" placement="right">
            <Button variant="fab" color="primary" aria-label="Save" style={styles.btn} onClick={props.save}>
              <SaveIcon/>
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener disableTouchListener title="Delete" placement="left">
            <Button variant="fab" color="primary" aria-label="Delete" style={styles.btn} onClick={props.delete}>
              <DeleteRoundedIcon />
            </Button>
          </Tooltip>
        </div>
      </Dialog>
  );
}

export default WithClass(FormTask, css.form);
