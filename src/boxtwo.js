import React, { Component } from 'react';
import logo from './logo.svg';
import {TweenMax, Power1, TimelineLite} from "gsap";
import GSAP from 'react-gsap-enhancer'
import TransitionGroup from 'react-addons-transition-group';
import './style.css'
import PortfolioCircle from './portfoliocircle.js'
import ReactPlayer from 'react-player'
import InstagramEmbed from 'react-instagram-embed'

class BoxTwo extends React.Component {
  state = {
    image: ""
  }

  // componentDidMount(){
  //   fetch(`https://api.instagram.com/oembed?url=https://www.instagram.com/p/BiNqEv_gK_7/?taken-by=mirosama_`)
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }
  componentWillEnter (callback) {
    const el = this.container;
    console.log(el)
    TweenMax.fromTo(el, 0.8, {y: 100, opacity: 0}, {y: 0, opacity: .5, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.8, {y: 0, opacity: .5}, {y: -100, opacity: 0, onComplete: callback});
  }

  handleForm = (e) => {
    e.preventDefault()
    console.log("e")
  }

  render () {
    console.log(this.state.image)
    return(
      <div>
      <div className="boxtwo" ref={c => this.container = c} />
      <ReactPlayer className="vid" height="500px" width="900px"url='https://youtu.be/jrcQQ4Fc-Qs' loop="true" playing />
        <InstagramEmbed
          className="form"
          url='https://www.instagram.com/p/BiNqEv_gK_7/?taken-by=mirosama'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
        <PortfolioCircle />
      </div>
    )
  }
}

export default GSAP()(BoxTwo);
// https://api.instagram.com/oembed?url=https://www.instagram.com/p/BiNqEv_gK_7/?taken-by=mirosama_
// componentDidMount () {
//     fetch(`http://localhost:3000/api/v1/results`)
//     .then(res => res.json())
//     .then(json => {
//       this.setState({
//         data: json
//       })
//     })
// <form className="form" onSubmit={this.handleForm}>
//   <label>
//     Name:
//     <textarea type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>

// <a className="text" target="_blank" href="https://github.com/miroosama">Github</a>
// <a className="text2" target="_blank" href="https://www.linkedin.com/in/osamamiro/">LinkedIn</a>
