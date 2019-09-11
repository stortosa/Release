import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser";
import AuthService from '../service/Services';
import { Link } from 'react-router-dom';


export default class demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: null,
      audioSrc: [],
    };
    this.service = new AuthService();
  }

  getUserDemos = () => {
    this.service.userDemos()
      .then(response => {
        console.log(response)
        this.setState({
          ...this.state,
          allDemos: response,
        })
      })
  }
  toggleForm = () => {
    if (!this.state.isShowing) {
      this.setState({ isShowing: true });
    } else {
      this.setState({ isShowing: false });
    }
  }

  // de AQUI para abajo Es de la API

  componentDidMount() {
  }

  controlAudio(status) {
    this.setState({
      status
    })
  }

  changeScheme(e) {
    this.setState({
      audioType: e.target.value
    })
  }


  render() {
    const { status, audioSrc } = this.state;
    const audioProps = {
      audioType: "audio/wav", // supported audio/wav,audio/mp3, default audio/webm
      status, // Triggering component updates by changing status
      audioSrc,
      timeslice: 1000,
      startCallback: (e) => {
        console.log("succ start", e)
      },
      pauseCallback: (e) => {
        console.log("succ pause", e)
      },
      stopCallback: (e) => {
        this.setState({
            audioSrc: window.URL.createObjectURL(e)
        })
        console.log("succ stop", e)
    },

      onRecordCallback: (e) => {
        console.log("recording", e)
      },
      errorCallback: (err) => {
        console.log("error", err)
      }

    }

    return (
      <div>
        <h1>Audio-Daily</h1>
        <section className="recordBox">
          <h3>Tellme your day, please</h3>
          <AudioAnalyser {...audioProps}>
            <div className="btn-box">
              {status !== "recording" &&
                <button className="iconfont icon-start" title="Record"  //开始
                  onClick={() => this.controlAudio("recording")}>Record</button>}
              {status === "recording" &&
                <button className="iconfont icon-pause" title="Pause"  //暂停
                  onClick={() => this.controlAudio("paused")}>Pause</button>}
              <button className="iconfont icon-stop" title="Stop"   //停止
                onClick={() => this.controlAudio("inactive")}>Stop</button>
            </div>
          </AudioAnalyser>

          <select name="" id="" onChange={(e) => this.changeScheme(e)} value="audioType">
            {/* value={audioType} */}

            <option value="audio/webm">audio/webm（default）</option>
            <option value="audio/wav">audio/wav</option>
            <option value="audio/mp3">audio/mp3</option>
          </select>
        </section>
        <section className="wrapcalm">
          <div className="linkcalm">
            <Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link>
          </div>
          <div className="linkcalm">
            <Link to="/AddGoal" style={{ textDecoration: 'none' }}>Goals and Dreams</Link>
          </div>
          <div className="linkcalm">
            <Link to="/calm" style={{ textDecoration: 'none' }}>Calm</Link>
          </div>
        </section>
      </div>
    );
  }
}