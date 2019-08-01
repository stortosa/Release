import React from "react";
import posed from "react-pose";

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99]
};

const Frame = posed.div({
  zoomedIn: {
    applyAtStart: { display: "block" },
    opacity: 1
  },
  zoomedOut: {
    applyAtEnd: { display: "none" },
    opacity: 0
  } 
});

const Image = posed.img({
  zoomedIn: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 600,
    height: 600,
    flip: true,
    transition: transition
  },
  zoomedOut: {
    position: "static",
    width: 200,
    height: 200,
    flip: true,
    transition: transition
  }
});

class ZoomImg extends React.Component {
  state = { isZoomed: false };

  zoomIn() {
    window.addEventListener("scroll", this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    window.removeEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: false });
  };

  render() {
    const { imageWidth, imageHeight, ...props } = this.props;
    const { isZoomed } = this.state;
    const pose = isZoomed ? "zoomedIn" : "zoomedOut";

    return (
      <div
        className="image-frame"
        onClick={() => (this.state.isZoomed ? this.zoomOut() : this.zoomIn())}
        style={{ width: imageWidth, height: imageHeight }}
      >
        <Frame pose={pose} className="frame" />
        <Image className="ZoomImage" pose={pose} {...props} />
      </div>
    );
  }
}

export default ZoomImg;