import React from 'react';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField'
import css from './Card.css'


const CardItem = (props) => {
  let card = (
      <TextField
        id="multiline-flexible"
        multiline
        rowsMax="3"
        name="text"
        required
        error={(props.todo) ? props.todo.text === "" : false}
        placeholder="Add your task here"
        margin="normal"
        onChange={props.changed}
        value={props.todo.text}
        onBlur={props.save}/>
    );

    let btnBox = (
      <Tooltip disableFocusListener disableTouchListener title="Edit">
        <Button variant="flat" color="primary" aria-label="Edit" className={css.btn} onClick={props.edit}>
          <EditIcon />
        </Button>
      </Tooltip>

    )

    if (props.todo.status === true) {
      card = (
        <div className={css.crossed}>{props.todo.text}</div>
      )
      btnBox = null
    }

    return (
      <Card className={css.card}>
        <CardContent className={css.content}>
          <Checkbox name="status" checked={props.todo.status} onChange={props.changed} color="primary" />
          {card}
          <div>
            <Tooltip disableFocusListener disableTouchListener title="Delete">
              <Button variant="flat" color="primary" aria-label="Delete" className={css.btn} onClick={props.delete}>
                <DeleteIcon />
              </Button>
            </Tooltip>
              {btnBox}
          </div>
        </CardContent>
      </Card>
    );
  }


  export default CardItem;
