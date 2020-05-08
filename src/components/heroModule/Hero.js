import React from "react"
import SocialMedia from "../socialMedia/SocialMedia"
import Styles from "./Hero.module.scss"

const Hero = (props) => {
  return (
    <div className={`${Styles.hero} hero `}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.subtitle}</h2>
          <SocialMedia isVertical={true} />
        </div>
      </div>
    </div>
  )
}
export default Hero