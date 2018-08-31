import React, {Component} from 'react'
import FormTask from './Form/Form'
import TextField from '@material-ui/core/TextField'


class Edit extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: {text:'', status: false}
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      todo: nextProps.todo
    })
  }

  changeToDo = (event) => {
    const todo = {...this.state.todo}
    todo[event.target.name] = event.target.value
    todo.status = false
    this.setState({
      todo: todo
    })
  }

  saveToDo = () => {
    const todo = {...this.state.todo}
    this.setState({
      todo: todo
    })
    this.props.add(this.state.todo)
  }

  render() {
    return (
      <FormTask
        title="New Task"
        save={this.saveToDo}
        close={this.props.close}
        open={this.props.open}
        delete={this.props.delete}>
        <TextField
          id="multiline-flexible"
          name="text"
          label="Add your task here"
          multiline
          rowsMax="4"
          margin="normal"
          value={(this.state.todo) ? this.state.todo.text : ''}
          onChange={this.changeToDo} />
        </FormTask>
      )
    }
  }



  export default Edit;
