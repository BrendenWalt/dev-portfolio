import React from "react"
import SocialMedia from "../socialMedia/SocialMedia"
import { graphql, useStaticQuery} from "gatsby" 
import BackgroundImage from "gatsby-background-image"

import Styles from "./Hero.module.scss"


const Hero = (props) => {

  const Data = useStaticQuery(graphql`
    query backgroundImage {
      file(relativePath: { eq: "hero-bg-ph.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={`${Styles.hero} hero `}>
      <BackgroundImage
        className={Styles.heroBg}
        fluid={Data.file.childImageSharp.fluid}
      >
        <div className={Styles.heroBody}>
          <div className="container has-text-centered">
            <h1 className="title">{props.title}</h1>
            <h2 className="subtitle">{props.subtitle}</h2>
            <div className={Styles.heroSocialmedia}>
              <SocialMedia isVertical={true} />
            </div>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}
export default Hero
