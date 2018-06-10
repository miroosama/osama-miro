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
      <div className="boxtwo" ref={c => this.container = c}>
        <PortfolioCircle />
      </div>
    )
  }
}

export default GSAP()(BoxTwo);
