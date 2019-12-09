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
    <div>
      Experience Section
    </div>
  )
} 

export default Experience