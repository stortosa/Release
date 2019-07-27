import React, { Component } from 'react'

export default class UserCalmList extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.items.map((item, idx) =>
          <lo>
            <li key={idx}>{item}
            </li>
          </lo>
        )}
      </div>
    )
  }
}


