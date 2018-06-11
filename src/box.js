import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'

class Box extends React.Component {
  componentWillEnter (callback) {
    const el = this.container;
    console.log(el)
    TweenMax.fromTo(el, 0.8, {y: 100, opacity: 0}, {y: 0, opacity: .9, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.8, {y: 0, opacity: .5}, {y: -100, opacity: 0, onComplete: callback});
  }

  toggle = () => {
    console.log("hi")
  }

  render () {
   let textAreaStyle = {
       width: 1300,
       height: 450,
       border: '3px solid #cccccc',
       padding: '5px',
       fontFamily: 'Tahoma, sans-serif',
       overflow: 'auto',
       marginLeft: '10px'
   }
    return(
      <div>
      <div id="middle" className="box" ref={c => this.container = c}/>
    </div>
    )
  }
}

export default GSAP()(Box);
