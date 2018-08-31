import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import css from './Header.css'

const Header = (props) => {

  return (
      <AppBar position="static" color="default">
        <Toolbar className={css.root}>
        <Typography variant="title" color="inherit" className={css.h1}>
          {props.title}
        </Typography>
          <Tooltip disableFocusListener disableTouchListener title="Add" placement="left">
          <Button variant="flat" color="primary" aria-label="Add" onClick={props.add}>
            <AddIcon />
          </Button>
        </Tooltip>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
