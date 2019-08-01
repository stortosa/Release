import React, { Component } from "react";
import AudioAnalyser from "react-audio-analyser";
import AuthService from '../service/Services'
import Axios from "axios";


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

  // deleteDemo = (e, demo_id) => {
  //   e.preventDefault();
  //   this.service.removeDemo(demo_id)
  //     .then(x => {

  //     })
  //   this.getUserDemos()
  // }
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
        let audios = this.state.audioSrc
        audios.push(window.URL.createObjectURL(e))
        //poner en auth.js
        let song = window.URL.createObjectURL(e)

        this.service.addDemos(song)
          // console.log(song)
          // .post("/auth/addDemos", { song })
          .then(createdDemo => {
            console.log(createdDemo)
            // res.json(createdDemo)
          })

        this.setState({
          audioSrc: audios
        })
        console.log("succ stop", e)
        console.log(this.state.audioSrc, "Cogelo aqui")
        console.log(e)
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
          <h3>Tellme you day, please</h3>
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
          {this.state.audioSrc.map((song, idx) =>
            <a href={song}>{"song " + idx}</a>
          )}
          {/* 选择输出格式 */}
          <select name="" id="" onChange={(e) => this.changeScheme(e)} value="audioType">
            {/* value={audioType} */}
            <option value="audio/webm">audio/webm（default）</option>
            <option value="audio/wav">audio/wav</option>
            <option value="audio/mp3">audio/mp3</option>
          </select>
        </section>
      </div>
    );
  }
}