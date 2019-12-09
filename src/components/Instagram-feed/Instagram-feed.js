import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Instagram = () => {
  const feed = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6) {
        edges {
          node {
            preview
            original
            timestamp
          }
        }
      }
    }
  `)
  console.log(feed);
  return (
    <div className="instagram-feed">
      {feed.allInstaNode.edges.map(({node}) => (
        <div className="instagram-item">
          <img src={node.preview} alt=""/>
          
        </div>
      ))}
    </div>
  )
}


export default Instagram