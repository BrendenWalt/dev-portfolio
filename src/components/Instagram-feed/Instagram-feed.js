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
  // Sort feed from most recent to oldest post
  const feedSort = feed.allInstaNode.edges.sort((a,b) => b.node.timestamp - a.node.timestamp);
  return (
    <div className="instagram-feed">
      {feedSort.map(({node}) => (
        <div className="instagram-item">
          <img src={node.preview} alt=""/>
        </div>
      ))}
    </div>
  )
}


export default Instagram