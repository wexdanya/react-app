import React, { Component } from "react";

class WindowSizes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }
  resizeWindow = () => {
    this.setState({ w: window.innerWidth, h: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.resizeWindow);
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.resizeWindow);
  }
  render() {
    const { w, h } = this.state;
    return (
      <div>
        <h3>
          width: {w}, height :{h}
        </h3>
      </div>
    );
  }
}

export default WindowSizes;
