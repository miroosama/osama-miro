import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'

class About extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    console.log(el)
    TweenMax.fromTo(el, 0.8, {y: 100, opacity: 0}, {y: 0, opacity: .5, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.8, {y: 0, opacity: .5}, {y: -100, opacity: 0, onComplete: callback});
  }

  render () {
    return(
      <div>
      <div className="me" ref={c => this.container = c}></div>
      </div>
    )
  }
}

export default GSAP()(About);
// <text fontFamily="typewriter" fontSize="30px" fill="black">Press Play then Click a Circle</text>
// <img src="http://lwlcdn.lwlies.com/wp-content/uploads/2016/07/destino-disney-dali-1108x0-c-default.jpg" alt="me" width="500" height="377" ref={c => this.container = c}/>
