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
          <div className={Styles.heroInfoCard}>
            <h1 className={Styles.heroTitle}>{props.title}</h1>
            <h3 className={Styles.heroSubtitle}>{props.subtitle}</h3>
            <div className={Styles.heroInfoCardBox}></div>
          </div>
          <div className={Styles.heroSocialmedia}>
            <SocialMedia isVertical={true} />
          </div>
        </div>
        <div className={Styles.heroBgEffects}></div>
      </BackgroundImage>
    </div>
  )
}
export default Hero
