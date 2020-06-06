import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaInstagram } from "react-icons/fa"

import Styles from "./Instagram.module.scss"

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
    <div className={Styles.instagramFeed}>
      <div className={Styles.instagramGrid} data-igoverlay="">
        {feedSort.map(({ node }) => (
          <div key={node.id} className={Styles.instagramItem}>
            <img src={node.preview} alt="" />
          </div>
        ))}
        <div className={Styles.instagramOverlay}>
          <h3>
            <a href="https://www.instagram.com/brenden_walters/">
              <FaInstagram /> | Follow me on instagram
            </a>
          </h3>
        </div>
      </div>
      
    </div>
  )
}


export default Instagram