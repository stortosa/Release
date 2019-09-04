import React, { Component } from 'react';
import ZoomImg from '../components/ZoomImg';
import AuthServices from '../service/Services';

export default class Dreams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      color: "",
      isShowing: false,
      loggedInUser: null,
      file: null,
      happypic: null,
    };
    this.service = new AuthServices();
  }

  getHappypic() {
    this.service.getHappypic()
      .then(response => {
        console.log(response)
        if (response[0] === undefined) {
          return
        }
        this.setState({
          ...this.state,
          happypic: response[0].picture.imgPath
        })
      })
  }

  componentDidMount() {
    this.service.loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        })
      })
    this.getHappypic()
    // console.log(this.state.loggedInUser)
  }

  handlePhotoSubmit(e) {
    e.preventDefault()
    this.service.addHappyPicture(this.state.file)
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          file: null,
          happypic: response.picture.imgPath,
        });
      })
  }

  handlePhotoChange(e) {
    this.setState({
      ...this.state,
      file: e.target.files[0]
    })
  }

  showHappyPicForm = () => {
    if (this.state.isShowing) {
      return (
        <div>
          <h2>Photo about a Dream</h2>
          <form onSubmit={(e) => this.handlePhotoSubmit(e)}>
            <input type="file" onChange={(e) => this.handlePhotoChange(e)} /> <br />
            <button type="submit">Update the photo</button>
          </form>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        <h3>Click Image-Dream to do big your dream</h3>
        {(this.state.happypic) ?
          <React.Fragment>
            <ZoomImg src={this.state.happypic} alt="" />
          </React.Fragment>
          : ""}
      </div>
    )
  }
}
