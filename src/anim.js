import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import Box from './box.js'
import BoxTwo from './boxtwo.js'
import BoxThree from './boxthree.js'
import About from './aboutme.js'
import './style.css'
import ReactPlayer from 'react-player'
import PortfolioCircle from './portfoliocircle.js'
import MetaTags from 'react-meta-tags'

//or get to the parts that aren't included inside TweenMax:
// import Draggable from "gsap/Draggable";
// import ScrollToPlugin from "gsap/ScrollToPlugin";

class Anim extends Component {
  state = {
    clicked: false,
    clicked1: false,
    clicked2: false,
    clicked3: false,
  }
//
// makeCircle = () => {
//     var box = ('#circle');
//     console.log(box)
//  var tween = TweenMax.to(box, 2, { r: 900
//  x: 800,
//  ease: Power1.easeInOut,
//  delay: 2,
//   onComplete: this.myFunction,
//  // onCompleteParams: [element, 'param2']
// });
// }
toggleBox = (e) => {
  this.setState({
    clicked: !this.state.clicked
  })
  this.showMission()
}

showMission = () => {
  return <div className="mission" ref={c => this.container = c} />
}

showStory = () => {
  return <div className="story" ref={c => this.container = c} />
}

toggleBox1 = (e) => {
  this.setState({
    clicked1: !this.state.clicked1
  })
}
toggleBox2 = (e) => {
  this.setState({
    clicked2: !this.state.clicked2
  })
}
toggleBox3 = (e) => {
  this.setState({
    clicked3: !this.state.clicked3
  })
}
// moveAnimation = ({target}) => {
//   let shape = target.find({type: 'circle'})
//   return TweenMax.to(shape, 1, {cx: 123})
// }

chooseNarrative = () => {
  if(this.state.clicked == true && this.state.clicked3 == false) {
    return this.showMission()
  } else if (this.state.clicked3 == true & this.state.clicked == false) {
    return this.showStory()
  } else if (this.state.clicked == true && this.state.clicked3 == true){
    return <ReactPlayer className="choice" url='https://youtu.be/Y3IMms8g-lg' playing />
  }

}



  render() {
    return(
      <div className="page">
        {this.chooseNarrative()}
        <div className="about" ref={c => this.container = c} />
        <TransitionGroup>
        {this.state.clicked && <Box />}
        {this.state.clicked1 && <BoxTwo />}
        {this.state.clicked2 && <About />}
        {this.state.clicked3 && <BoxThree />}
        </TransitionGroup>
        <button
        className="btn"
        onClick={this.toggleBox}
      >
        About Me
      </button>
        <button
        className="btn"
        onClick={this.toggleBox1}
      >
        Portfolio
      </button>
        <button
        className="btn"
        onClick={this.toggleBox2}
      >
        Me
      </button>
        <button
        className="btn"
        onClick={this.toggleBox3}
      >
        A Story
      </button>
      </div>
    );
  }
}

export default GSAP()(Anim);
// <div className="mission" ref={c => this.container = c} />

// {this.state.clicked ? this.showMission() : null}
// {this.state.clicked3 ? this.showStory() : null}
