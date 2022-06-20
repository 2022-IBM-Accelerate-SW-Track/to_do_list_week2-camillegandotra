import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Camille Gandotra</div>
            <div className="brief_description">
              Hi my name is Camille Gandotra and I am a rising sophmore studying Computer Engineering!
              I enjoy going to the gym, listening to The Strokes and Arctic Monkeys, and coding.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
