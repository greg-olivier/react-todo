import React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import EditIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';
import CardItem from './Card/Card'
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import css from './List.css'

const List = (props) => {
  let item = null;

  if (props.todo.status === false) {
    item = (
      <div>
        <CardItem>
          <Checkbox name="status" checked={props.todo.status} onChange={props.changed} color="primary" />
          <input type="text" name="text" placeholder="Add your task here" onChange={props.changed} value={props.todo.text} />
          <div>
            <Tooltip disableFocusListener disableTouchListener title="Edit">
            <Button variant="flat" color="primary" aria-label="Edit" style={css.btn} onClick={props.edit}>
              <EditIcon />
            </Button>
          </Tooltip>
          <Tooltip disableFocusListener disableTouchListener title="Delete">
            <Button variant="flat" color="primary" aria-label="Delete" style={css.btn} onClick={props.delete}>
              <DeleteIcon />
            </Button>
            </Tooltip>
          </div>
        </CardItem>
      </div>
    )
  }
  return item

}

export default List;
