import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import ReactPlayer from 'react-player'


class Skill extends React.Component {

  componentWillEnter (callback) {
    const el = this.container;
    console.log(el, "hello")
    TweenMax.fromTo(el, 0.8, {y: 100, opacity: 0}, {y: 0, opacity: .5, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.8, {y: 0, opacity: .5}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    console.log("hello")
    return(
      <div>
      <div className="boox7" ref={c => this.container = c} />
      </div>
    )
  }
}

export default GSAP()(Skill);
