import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaCaretRight} from 'react-icons/fa'
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

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
  console.log(data);
  return (
    <div className={`${Styles.experienceModule} content-module`} name="experience" id="experience">
      <h2>Experience</h2>
      <div className={Styles.experienceList}>
        {data.allResumeItemsJson.edges.map(({node}) => {
          const bg = { backgroundImage: `url(${node.company_logo.childImageSharp.fluid.src})`};
          return (
            <div className={Styles.experienceItem} key={node.id} style={bg}>
            <h4 className={Styles.experienceTitle}>{node.job_title}</h4>
            <p className={Styles.experienceCompany}>{node.company}</p>
            <p className={Styles.experienceRange}>{node.date_range}</p>
            <p className={Styles.experienceDescription}>{node.description}</p>
            <div className={Styles.experienceAccordion}>
              <a href="#">
                <span className={Styles.accIcon}>
                  <FaCaretRight />
                </span> More Details...
              </a>
              <div className={Styles.experienceAccordionContent}>
                <ul className={Styles.experienceTraits}>
                  {node.list.map((item) => {
                    return (
                      <li>{item}</li>
                    )
                  })}
                </ul>
                <ul className={Styles.experienceSkills}>
                  {node.skills_list.map((skill) => {
                    return (
                      <li>{skill}</li>
                    )
                  })}
                </ul>
              </div>
              
            </div>
           
          </div>
          )
          
        })}
      </div>
    </div>
  )
} 

export default Experience