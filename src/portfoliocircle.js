import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineMax} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import Skill from './skill.js'

class PortfolioCircle extends React.Component {
  state = {
    skills: false,
    contact: false,
  }

  componentDidMount(callback) {
    const el = this.container;
    console.log(el)
    TweenMax.staggerTo(".boox", 1, {rotation:360, y:20}, .2);
    TweenMax.staggerTo(".boox2", 1, {rotation:360, y:30}, .2);
    TweenMax.staggerTo(".boox3", 1, {rotation:360, y:500}, .2);
    TweenMax.staggerTo(".boox4", 1, {rotation:360, y:30}, .2);
    TweenMax.staggerTo(".boox5", 1, {rotation:360, y:30}, .2);
    // TweenMax.from(".boox6", 1, {
    //   rotation: 0,
    //   delay: 1.5,
    //   repeat: -1,
    //   repeatDelay: 1,
    //   yoyo: true,
    //   ease:  Power1.easeIn
    // });
    TweenMax.set(".boox6", {visibility:"visible"})
// Variables timeline
    var tl1 = new TimelineMax({repeat: -1, repeatDelay: .5})
    tl1.from(".boox6", 1, {opacity:0,}, 2), // fade in duck
    tl1.to(".boox6", 1, {opacity:0},"+=.4"), // fade out duck
    tl1.from(".boox6", 1, {opacity:0}, "+=.4") // fade in dog
    tl1.to(".boox6", 1, {opacity:0}, "+=.4") // fade out dog

  }

  // reveal = () => {
  //   return this.state.skills ? <Skill /> : null
  // }

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
    this.setState({
      contact: !this.state.contact
    })
    window.scrollTo(500, 500);
  }

  handleSkills = (e) => {
    this.setState({
      skills: !this.state.skills
    })
    window.scrollTo(500, 900);
  }


  render () {

    return(
      <div>
        <div onClick={this.handleGithub} className="boox" ref={c => this.container = c}>Github</div>
        <div onClick={this.handleLinked} className="boox2" ref={c => this.container = c}>LinkedIn</div>
        <div className="contact" ref={c => this.container = c} />
        <div className="skills" ref={c => this.container = c} />
        <div className="boox3" ref={c => this.container = c}/>
        <div className="boox6" ref={c => this.container = c}/>
        </div>
    )
  }
}

export default GSAP()(PortfolioCircle);
        // {this.state.contact ? <div className="contact" ref={c => this.container = c} /> : null}
        // {this.state.skills ? <div className="skills" ref={c => this.container = c} /> : null}
        // <div onClick={this.handleContact} className="boox4" ref={c => this.container = c}>Contact</div>
        // <div onClick={this.handleSkills} className="boox5" ref={c => this.container = c}>Recent Work</div>
