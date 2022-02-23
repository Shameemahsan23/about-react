import React, { Component } from 'react'
import './style.css'
export default class STATE extends Component {

    // constructor 
    constructor(props) {
      super(props)
    
      this.state = {
         count :1 
      }
    }

    // end rcount 

    handleIncrement = () => {
         this.setState ({
             count : this.state.count +1    
         })
    }
    handleDecrement = () => {
         this.setState ({
             count : this.state.count -1   
         })
    }

  render() {

    // discastaring 

     const {count} = this.state
    return (
      <div>
          <h1> Count : {count}</h1>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement} disabled= {count === 0 ? true :false }>-</button>

      </div>
    )
  }
}
