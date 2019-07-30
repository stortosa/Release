import React, { Component } from "react";
// import "./index.css";
import AudioAnalyser from "react-audio-analyser"


export default class demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: null
    }
  }

  controlAudio(status) {
    this.setState({
      status
    })
  }

  render() {
    const { status, audioSrc } = this.state;
    const audioProps = {
      audioType: "audio/wav", // supported audio/wav,audio/mp3, default audio/webm
      status, // Triggering component updates by changing status
      audioSrc,
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
      }
    }
    return (
      <AudioAnalyser {...audioProps}>
        <div className="btn-box">
          {status !== "recording" &&
            <i className="iconfont icon-start" title="开始"
              onClick={() => this.controlAudio("recording")}></i>}
          {status === "recording" &&
            <i className="iconfont icon-pause" title="暂停"
              onClick={() => this.controlAudio("paused")}></i>}
          <i className="iconfont icon-stop" title="停止"
            onClick={() => this.controlAudio("inactive")}></i>
        </div>
      </AudioAnalyser>
    );
  }
}