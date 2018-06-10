import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import {withFauxDOM} from 'react-faux-dom'
import * as d3 from "d3";
import PortfolioCircle from './portfoliocircle.js'

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
        <PortfolioCircle />
      </div>
    )
  }
}

export default GSAP()(BoxTwo);


// <a className="text" target="_blank" href="https://github.com/miroosama">Github</a>
// <a className="text2" target="_blank" href="https://www.linkedin.com/in/osamamiro/">LinkedIn</a>
