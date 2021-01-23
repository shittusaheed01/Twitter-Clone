import React, { Component } from 'react'

import TweetsField from "./components/TweetsField/Tweets";
import Sidebar from "./components/Sidebar/sidebar";
import Trends from "./components/trends/Trends";

import "./App.css";

class App extends Component {

  constructor(){
    super()
    this.state = {
      isDesktop:false,
      isWideEnough:false
    }
  }

  componentDidMount(){
    this.update()
    window.addEventListener("resize", this.update)
  }
  componentWillUnmount(){
    window.removeEventListener("resize", this.update);
  }

  update = () => {
    this.setState({isDesktop: window.innerWidth > 850})
    this.setState({isWideEnough: window.innerWidth > 1100})
  }

  render() {
      const isDesktop = this.state.isDesktop
      const isWide = this.state.isWideEnough
    return (
      <section className="section">
            <Sidebar name={isWide}/>
            <TweetsField/>
            {isDesktop ? <Trends/> : ("") }
            
      </section>
    );
  }
}

export default App