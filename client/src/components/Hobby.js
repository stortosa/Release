import React, { Component } from 'react'

export default class Hobby extends Component {
  constructor(props){
    super(props)
    this.state = {
      status = null,
    };
  }
  render() {
    return (
      <div>
        <h3>Write your hobby that you like to do</h3>
      </div>
    )
  }
}
