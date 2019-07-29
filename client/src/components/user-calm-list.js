import React, { Component } from 'react'

export default class UserCalmList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.items.map((item, idx) =>
          <lo>
            <li key={idx}>{item}</li>
            <li>{this.props.items.title}</li>
            <li>{this.props.items.description}</li>

          </lo>
        )}
      </div>
    )
  }
}


