import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
//import WithClass from '../../hoc/WithClass'
import css from './Modal.css';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

// const styles = {
//   textCenter: {
//     textAlign: "center"
//   }
// }


const Modal = (props) => {
  return (
      <Dialog
        fullWidth={true}
        maxWidth="xs"
        className={css.textCenter}
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        TransitionComponent={Transition}>
        <DialogTitle id="alert-dialog-title" >{props.title}</DialogTitle>
        <DialogContent id="alert-dialog-description">
          {props.children}
        </DialogContent>
      </Dialog>
  );
}

export default Modal;
