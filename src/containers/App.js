import React, { Component } from 'react';
import css from './App.css';
import Edit from '../components/Edit/Edit'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import Aux from '../hoc/Aux'
import WithClass from '../hoc/WithClass'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [],
      editItem: false
    }
  }

  displayList = () => {
    this.setState({ editItem: false })
  }


  displayEdit = (index?) => {
    console.log("index",index);
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
    return (
      <Aux>
        <Header title={this.props.name} add={event => {this.displayEdit()}} />
        <Edit
          todo={(this.state.editItem !== (true || false)) ? this.state.todos[this.state.editItem] : null}
          add={this.addToDo}
          open={(this.state.editItem !== false) ? true : false}
          close={this.displayList}
          save={this.saveToDo}
          delete={this.deleteToDo.bind(this)}
        />
        <List
          done={false}
          todos={this.state.todos}
          edit={this.displayEdit}
          delete={ index => this.deleteToDo(index)}
          changed={(event,index) => {this.changeToDo(event,index)}}
        />
        <List
          done={true}
          todos={this.state.todos}
          edit={this.displayEdit}
          delete={ index => this.deleteToDo(index)}
          changed={(event,index) => {this.changeToDo(event,index)}}
        />
      </Aux>
    );
  }
}

export default WithClass(App, css.App);
