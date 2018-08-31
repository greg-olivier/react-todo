import React, {Component} from 'react';
import CardItem from './Card/Card';
import WithClass from '../../hoc/WithClass';
import css from './List.css';

class List extends Component {

  state = {
    dynMargin: null,
    widthCard: 200,
    marginSideCard: 10
  }

  componentWillMount(){
    this.resizeMargin()
  }

componentDidMount(){
  window.addEventListener('resize', this.resizeMargin)
}

resizeMargin = () => {
  const margin = (window.innerWidth % (this.state.widthCard + (2*this.state.marginSideCard)))/2
  this.setState ({
    dynMargin: {margin: '0 ' + margin + 'px'}
  })
  console.log(this.state)
}

  render() {
    return (
      <ul className={css.listFlex} style={this.state.dynMargin}>
        {this.props.todos.map( (todo, index) => {
          if (this.props.done === todo.status) {
            console.log(this.state.widthCard)
            return <li className={css.itemFlex} style={{width: this.state.widthCard, margin: '15px ' + this.state.marginSideCard + 'px'}} key={index}>
              <CardItem
                todo={todo}
                delete={ event => {this.props.delete(index)} }
                changed={ event => {this.props.changed(event, index)} }
                edit= {event => {this.props.edit(index)}}
              />
            </li>
          } else return null
        })
      }
    </ul>

  )
}
}




export default WithClass(List, css.List);
