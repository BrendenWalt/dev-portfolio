import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ExperienceCard from '../experienceCard/experienceCard'
import TechIcons from '../techIconsModule/TechIcons'
import Resume from '../../docs/Brenden_Walters_resume2020.pdf'

import Styles from "./Experience.module.scss"

const Experience = () => {

  

  const data = useStaticQuery(
    graphql`
    query {
      allResumeItemsJson {
        edges {
          node {
            company
            date_range
            description
            id
            job_title
            list
            skills_list
            company_logo {
              childImageSharp {
                fluid(quality: 80, maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    `
  )
  
  return (
    <>
    <div className={`${Styles.experienceModule} content-module`} name="experience" id="experience">
      <h2>Experience</h2>
      <div className={Styles.experienceList}>
        {data.allResumeItemsJson.edges.map(({node}) => {
          const bg_logo = node.company_logo.childImageSharp.fluid;
          const bg = { backgroundImage: `url(${node.company_logo.childImageSharp.fluid.src})`};
          return (
            // <div className={Styles.experienceItemContainer}>
              <ExperienceCard info={node} bg={bg} logo={bg_logo} />
            // </div>
          )
        })}
      </div>
      
      <div className={Styles.experienceResumeBtn}>
        <a className={`cta-secondary ${Styles.experienceResume}`} href={Resume}>View Resume</a>
      </div>
    </div>
    <TechIcons />
    </>
  )
} 

export default Experience