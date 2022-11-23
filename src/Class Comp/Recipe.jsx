import React, { Component } from "react";
import "../App.css";

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;
export default class recipe extends Component {
  constructor(props) {
    super(props);
  }

  addToDone = () => {
    this.props.SendImg2Done(this.props.indx);
  };

  render() {
    if (this.props.cheN == 0) {
      return (
        <div className="Dishs col-12 col-md-4 col-lg-3">
          <img className="img-fluid" src={this.props.img}></img>
          <br />
          <p style={{ margin: 10 }}>{this.props.name}</p>
          <br />

          <p className="pDecs">{this.props.description}</p>
          <br />
          <div className="btnDiv">
            <button onClick={this.addToDone} className="btn">
              Prepare dish!
            </button>
          </div>
        </div>
      );
    } else
      return (
        <div className="Dishs col-12 col-md-4 col-lg-3">
          <img className="img-fluid" src={this.props.img}></img>
          <br />
          <p style={{ margin: 10 }}>{this.props.name}</p>
          <br />

          <p style={{ margin: 10 }}>{this.props.description}</p>
          <br />
          <button onClick={this.addToDone} className="btn">
            Eat!
          </button>
        </div>
      );
  }
}
