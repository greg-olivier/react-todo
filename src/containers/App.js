import React, { Component } from 'react';
import classes from './App.css';
import List from '../components/List/List'
import Edit from '../components/Edit/Edit'
import Header from '../components/Header/Header'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      create: false,
      editItem: null
    }
  }

  displayList = () => {
    if (this.state.editItem !== null || this.state.create === true)
      this.setState({ editItem: null, create: false })
  }

  displayCreate = () => {
    if (this.state.create === false && this.state.editItem === null)
      this.setState({ create: true, editItem: null })
  }

  displayEdit = (index) => {
    if (this.state.create === false && this.state.editItem === null)
      this.setState({ create: false, editItem: index })
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

  saveToDo = (todo, index) => {
    const todos = [...this.state.todos]
    todos[index] = todo
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

  let scene = (
    <List
      todos={this.state.todos}
      edit={index => this.editTodo(index)}
      delete={ index => this.deleteToDo(index)}
      changed={(event,index) => {this.changeToDo(event,index)}}/>
  );

  if (this.state.create === true) {

      scene = (
        <Edit
          open={(this.state.editItem !== null || this.state.create === true) ? true : false}
          close={this.displayList}
          add={this.addToDo}
          delete={this.deleteToDo.bind(this)} />
      )
    } else if (this.state.editItem !== null) {
      scene = (
        <Edit
          todo={this.state.todos[this.state.editItem]}
          open={(this.state.editItem !== null || this.state.create === true) ? true : false}
          close={this.displayList}
          save={this.saveToDo}
          delete={this.deleteToDo.bind(this)} />
      )
    }

    return (
      <div className={classes.App}>
        <Header title={this.props.name} click={this.displayCreate} />
      </div>
    );
  }
}

export default App;
