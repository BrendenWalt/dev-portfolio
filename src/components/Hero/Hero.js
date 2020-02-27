import React from "react"
import Styles from "./Hero.module.scss"

const Hero = (props) => {
  return (
    <div className={`${Styles.hero} hero is-fullheight`}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{props.title}</h1>
          <h2 classname="subtitle">{props.subtitle}</h2>
          <h3>Hello world</h3>
        </div>
      </div>
      
    </div>
  )
}

export default Hero