import React, {Component} from 'react';
import CardItem from './Card/Card';
import Aux from '../../hoc/Aux';
import css from './List.css';

class List extends Component {

  state = {
    dynMargin: null,
    widthCard: 200,
    marginSideCard: 10
  }

  componentWillMount(){
    this.resizeSideMargin()
  }

  componentDidMount(){
    window.addEventListener('resize', this.resizeSideMargin)
  }

  resizeSideMargin = () => {
    const margin = (window.innerWidth % (this.state.widthCard + (2 * this.state.marginSideCard))) / 2
    this.setState ({
      dynMargin: {margin: '15px ' + margin + 'px'}
    })
  }

  render() {

    let list = null;

    const display = this.props.todos.find((e) => {
      return e.status === this.props.done;
    });

    if (display !== undefined)
      list = (
        <Aux>
          <h2>{this.props.title}</h2>
          <div className={css.List}>
            <ul className={css.listFlex} style={this.state.dynMargin}>
              {this.props.todos.map( (todo, index) => {
                if (this.props.done === todo.status) {
                  return <li className={css.itemFlex} style={{width: this.state.widthCard, margin: this.state.marginSideCard + 'px'}} key={index}>
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
        </div>
      </Aux>
    )
    return list
  }
}




export default List;
