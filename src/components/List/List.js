import React from 'react';
import CardItem from './Card/Card';
import WithClass from '../../hoc/WithClass';
import css from './List.css';

const List = (props) => {
  return props.todos.map( (todo, index) => {
    if (props.done === todo.status) {
      return <CardItem
        todo={todo}
        delete={ event => {props.delete(index)} }
        changed={ event => {props.changed(event, index)} }
        edit= {event => {props.edit(index)}}
        key={index}
      />
    } else return null
  })
}




export default WithClass(List, css.list);
