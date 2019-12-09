import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Instagram = () => {
  const feed = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        edges {
          node {
            id
            preview
            original
            timestamp
          }
        }
      }
    }
  `)
  // Sort feed from most recent to oldest post
  const feedSort = feed.allInstaNode.edges.sort((a,b) => b.node.timestamp - a.node.timestamp).slice(0,6);
  return (
    <div className="instagram-feed">
      {feedSort.map(({node}) => (
        <div key={node.id} className="instagram-item">
          <img src={node.preview} alt=""/>
        </div>
      ))}
    </div>
  )
}


export default Instagram