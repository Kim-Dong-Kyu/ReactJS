import React, { Component } from 'react'

export default class RefSample2 extends Component {

  input = React.createRef();
 
  handleFocus = () => {
    this.input.current.focus();
  }
  render() {
    return (
      <div>
          <input ref={this.input}></input>
      </div>
    )
  }
}
