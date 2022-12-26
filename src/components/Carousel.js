import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props) {
    super();
    this.state = {
      i: 0,
    };
  }
  back = () => {
    if (this.state.i > 0) this.setState({ i: this.state.i - 1 });
  };
  forward = () => {
    if (this.state.i < 2) this.setState({ i: this.state.i + 1 });
  };

  render() {
    return (
      <div
        className="container"
        style={{
          backgroundImage: `url(${images[this.state.i].img})`,
        }}
      >
        <button onClick={this.back}>
          <ArrowBackIosIcon></ArrowBackIosIcon>
        </button>
        <div className="content">
          <h1>{images[this.state.i].title}</h1>
          <h3>{images[this.state.i].subtitle}</h3>
        </div>
        <button onClick={this.forward}>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </button>
      </div>
    );
  }
}

export default Carousel;
