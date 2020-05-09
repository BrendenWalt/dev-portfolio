import React from "react"
import SocialMedia from "../socialMedia/SocialMedia"
import { graphql, useStaticQuery} from "gatsby" 
import BackgroundImage from "gatsby-background-image"

import Styles from "./Hero.module.scss"


const Hero = (props) => {

  const Data = useStaticQuery(graphql`
    query backgroundImage {
      file( relativePath: {eq: "hero-bg-ph.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  // const bgImage = {Data.file.childImageSharp.fluid}
  return (
    <div className={`${Styles.hero} hero `}>
      
      <BackgroundImage className={Styles.heroBg} fluid={Data.file.childImageSharp.fluid}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
			<SocialMedia isVertical={true} />
          </div>
        </div>
      </BackgroundImage>
       
      
    </div>
  )
}
export default Hero
