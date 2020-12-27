import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Styles from "./Photog.module.scss"

const Photog = () => {

  const images = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: {original: {src: {regex: "/photog-sample/"}}}, sort: {order: ASC, fields: original___src}) {
          edges {
            node {
              fluid(quality: 80, maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  );

  return (
    <div className={`${Styles.photogModule} content-module`} name="photography" id="photography">
      <h2>Photography</h2>
      <div className={Styles.photogGrid}>
        {images.allImageSharp.edges.map(({node}) => {
          return (
            <div className={Styles.photogGridItem}>
              <Img fluid={node.fluid} />
            </div>
            
          );
        })}
      </div>
    </div>
  )
}

export default Photog