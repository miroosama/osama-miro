import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import {withFauxDOM} from 'react-faux-dom'
import * as d3 from "d3";

class PortfolioCircle extends React.Component {
  state = {
    skills: false,
  }

  componentDidMount(callback) {
    const el = this.container;
    console.log(el)
    TweenMax.staggerTo(".boox", 1, {rotation:360, y:20}, .2);
    TweenMax.staggerTo(".boox2", 1, {rotation:360, y:30}, .2);
      TweenMax.staggerTo(".boox3", 1, {rotation:360, y:500}, .2);
    TweenMax.staggerTo(".boox4", 1, {rotation:360, y:30}, .2);
    TweenMax.staggerTo(".boox5", 1, {rotation:360, y:30}, .2);
  }

  handleGithub = (e) => {
    console.log(e)
    window.open("https://github.com/miroosama")
  }

  handleLinked = (e) => {
    console.log(e)
    window.open("https://www.linkedin.com/in/osamamiro/")
  }

  handleContact = (e) => {
    console.log(e)
  }

  handleSkills = (e) => {
    // this.setState({
    //   skills: !this.state.skills
    // })
    window.scrollTo(500, 100);
  }


  render () {

    return(
      <div>
        <div onClick={this.handleGithub} className="boox" ref={c => this.container = c}>Github</div>
        <div onClick={this.handleLinked} className="boox2" ref={c => this.container = c}>LinkedIn</div>
        <div onClick={this.handleContact} className="boox4" ref={c => this.container = c}>Contact</div>
        <div onClick={this.handleSkills} className="boox5" ref={c => this.container = c}>Framworks</div>
        {this.state.skills ? <div className="skills" ref={c => this.container = c} /> : null}
        <div className="boox3" ref={c => this.container = c}/>
        <div className="boox6" ref={c => this.container = c}/>
        </div>
    )
  }
}

export default GSAP()(PortfolioCircle);
