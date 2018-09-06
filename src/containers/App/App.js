import React, { Component } from 'react';
import Edit from '../Edit/Edit'
import Header from '../../components/Header/Header'
import List from '../List/List'
import Aux from '../../hoc/Aux'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {text:"Do shopping" , status: false},
        {text:"Clean the flat" , status: false},
        {text:"Prepare tommorow meeting" , status: false}
      ],
      editItem: false,
      openSnackBar: false
    }
  }

  displayList = () => {
    this.setState({ editItem: false })
  }


  displayAdd = (index?) => {
    if (!index && index !== 0) index = true
    this.setState({ editItem: index })
  }


  changeToDo = (event, index) => {
    const todo = {...this.state.todos[index]}
    if (event.target.name === 'status')
    todo[event.target.name] = !this.state.todos[index].status
    else
    todo[event.target.name] = event.target.value
      const todos = [...this.state.todos]
      todos[index] = todo

      this.setState({
        todos: todos
      })
  }

  saveToDo = (todo, index?) => {
    index = (index) ? index : this.state.editItem
      const todos = [...this.state.todos]
      todos[this.state.editItem] = todo
      this.setState({
        todos: todos
      }, this.displayList)
  }

  addToDo = (todo) => {
      const todos = [...this.state.todos]
      todos.push(todo)
      this.setState({
        todos: todos
      }, this.displayList)
  }


  deleteToDo = (index) => {
    if (!index) index = this.state.editItem
    const todos = [...this.state.todos]
    todos.splice(index,1)
    this.setState({
      todos: todos
    }, this.displayList)
  }

  editTodo= (index) => {
    this.setState({
      create: false,
      editItem: index
    })
  }

  render() {
    return (
      <Aux>
        <Header title={this.props.name} add={event => {this.displayAdd()}} />
        <Edit
          todo={(this.state.editItem !== ( true || false)) ? this.state.todos[this.state.editItem] : null}
          add={this.addToDo}
          open={(this.state.editItem !== false) ? true : false}
          close={this.displayList}
          save={this.saveToDo}
          delete={this.deleteToDo}
        />
        <List
          title="To do"
          done={false}
          todos={this.state.todos}
          edit={this.displayAdd}
          delete={ index => this.deleteToDo(index)}
          changed={(event,index) => {this.changeToDo(event,index)}}
          save={this.saveToDo}
        />
        <List
          title="Done"
          done={true}
          todos={this.state.todos}
          edit={this.displayAdd}
          delete={ index => this.deleteToDo(index)}
          changed={(event,index) => {this.changeToDo(event,index)}}
        />
      </Aux>
    );
  }
}

export default App;
