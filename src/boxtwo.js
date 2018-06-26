import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import PortfolioCircle from './portfoliocircle.js'
import ReactPlayer from 'react-player'


class BoxTwo extends React.Component {
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
      <div className="boxtwo" ref={c => this.container = c} />
      <ReactPlayer className="vid" height="250px" width="450px"url='https://www.youtube.com/watch?v=AYtfof9n39Q&t=1s' playing />
        <PortfolioCircle />
      </div>
    )
  }
}

export default GSAP()(BoxTwo);


// <a className="text" target="_blank" href="https://github.com/miroosama">Github</a>
// <a className="text2" target="_blank" href="https://www.linkedin.com/in/osamamiro/">LinkedIn</a>
