import React, {Component} from 'react'
import Modal  from '../../components/Modal/Modal'
import TextField from '@material-ui/core/TextField'
import SaveIcon from '@material-ui/icons/SaveRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import css from './Edit.css';


class Edit extends Component {
  state = {}

  componentWillReceiveProps(nextProps){
    this.setState({
      todo: nextProps.todo
    })
  }

changeToDo = (event) => {
    const todo = {...this.state.todo}
    todo[event.target.name] = event.target.value
    this.setState({
      todo: todo
    })
  }

  saveToDo = () => {
    const todo = {...this.state.todo}
    if (!todo.hasOwnProperty('status')) {
      todo.status = false
      this.setState({
        todo: todo
      }, () => this.props.add(this.state.todo))


    } else {
      this.setState({
        todo: todo
      }, () => this.props.save(this.state.todo))

    }
  }

  deleteTodo = () => {
    if (this.state.todo)
      this.props.delete()
    else
      this.props.close()
  }

  render() {
    return (
      <Modal
        title="New Task"
        close={this.props.close}
        open={this.props.open}>
        <TextField
          id="multiline-flexible"
          name="text"
          label="Add your task here"
          multiline
          error={(this.state.todo) ? this.state.todo.text === "" : false}
          rowsMax="4"
          margin="normal"
          value={(this.state.todo) ? this.state.todo.text : ''}
          onChange={this.changeToDo} />
          <div className={css.btnBox}>
            <Tooltip disableFocusListener disableTouchListener title="Delete" placement="right">
              <Button variant="fab" color="primary" aria-label="Delete" className={css.btn} onClick={this.deleteTodo}>
                <DeleteRoundedIcon />
              </Button>
            </Tooltip>
            <Tooltip disableFocusListener disableTouchListener title="Save" placement="left">
              <Button variant="fab" color="primary" aria-label="Save" className={css.btn} onClick={this.saveToDo} disabled={(this.state.todo && this.state.todo.text !== "") ? false : true}>
                <SaveIcon/>
              </Button>
            </Tooltip>
          </div>
        </Modal>
      )
    }
  }



  export default Edit;
