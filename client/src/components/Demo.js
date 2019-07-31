import React, { Component } from "react";
// import "./index.css";
import AudioAnalyser from "react-audio-analyser"
// "react-audio-analyser"


export default class demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: null
    }
  }
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
        console.log(this.state.audioSrc, "COgelo de AKI")
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
        <AudioAnalyser {...audioProps}>
          <div className="btn-box">
            {status !== "recording" &&
              <button className="iconfont icon-start" title="开始"
                onClick={() => this.controlAudio("recording")}></button>}
            {status === "recording" &&
              <button className="iconfont icon-pause" title="暂停"
                onClick={() => this.controlAudio("paused")}></button>}
            <button className="iconfont icon-stop" title="停止"
              onClick={() => this.controlAudio("inactive")}></button>
          </div>
        </AudioAnalyser>
        <p>选择输出格式</p>
        <select name="" id="" onChange={(e) => this.changeScheme(e)} value="audioType"> 
        {/* value={audioType} */}
          <option value="audio/webm">audio/webm（default）</option>
          <option value="audio/wav">audio/wav</option>
          <option value="audio/mp3">audio/mp3</option>
        </select>
      </div>
    );
  }
}