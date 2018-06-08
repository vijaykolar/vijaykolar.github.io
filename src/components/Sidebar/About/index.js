import React, { Component } from 'react'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        <div className="bio">
          A technology enthusiast &amp; who loves travelling, movies occasionally
          and follows football ardently.
          <div className="emoji">
            ✈️ &nbsp; 😁&nbsp; 👨🏽‍💻 ⚽ 🎷
          </div>
        </div>
      </div>
    )
  }
}

export default About