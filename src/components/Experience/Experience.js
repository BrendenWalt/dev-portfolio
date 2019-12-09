import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
          }
        }
      }
    }
    `
  )
  console.log(data);
  return (
    <div className="Experience">
      Experience Section
      <div className="resume-list">
        {data.allResumeItemsJson.edges.map(({node}) => (
          <div className="resume-item" key={node.id}>
            <div className="resume-title">{node.job_title}</div>
            <div className="resume-company">{node.company}</div>
            <div className="resume-range">{node.date_range}</div>
            <div className="job-description">{node.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Experience