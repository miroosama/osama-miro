import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import {withFauxDOM} from 'react-faux-dom'
import * as d3 from "d3";

class PortfolioCircle extends React.Component {

  componentDidMount(callback) {
    const el = this.container;
    console.log(el)
    TweenMax.staggerTo(".boox", 1, {rotation:360, y:100}, .2);
    TweenMax.staggerTo(".boox2", 1, {rotation:360, y:300}, 3);
    TweenMax.staggerTo(".boox3", 1, {rotation:360, y:300}, 3);
  }

  render () {

    return(
      <div>
        <div className="boox" ref={c => this.container = c}>HI</div>
        <div className="boox2" ref={c => this.container = c}/>
        <div className="boox3" ref={c => this.container = c}/>
        </div>
    )
  }
}

export default GSAP()(PortfolioCircle);
