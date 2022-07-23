import React, { Component }  from 'react';
import { patternContext } from './App';

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            initialCount : props.initialCount
        }
    }
  
    render(){
        return (
          <patternContext.Consumer>
             { (patternStyle) => (
                <div>
                    <button style={ patternStyle} className='btn' onClick = { () => {this.changeCounter(-1)}}>-</button>
                    <span> {this.state.initialCount} </span>
                    <button style={ patternStyle} className='btn' onClick={() => {this.changeCounter(1)}}>+</button>
                </div>
              )}
            </patternContext.Consumer>
        )
    }

    changeCounter(size){
          this.setState({initialCount : this.state.initialCount + size})
          //  this.setState(prevState  => { return { initialCount : prevState.initialCount + size} })
    }
}