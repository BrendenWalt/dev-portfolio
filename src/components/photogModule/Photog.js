import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Styles from "./Photog.module.scss"

const Photog = () => {

  const images = useStaticQuery(
    graphql`
      query {
        allImageSharp(filter: {original: {src: {regex: "/photog-sample/"}}}) {
          edges {
            node {
              fluid(quality: 80, maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  );

  console.log(images.allImageSharp.edges);

  return (
    <div className={`${Styles.photogModule} content-module`} name="photography" id="photography">
      <h2>Photography</h2>
      <div className={Styles.photogGrid}>
        {images.allImageSharp.edges.map(({node}) => {
          return (
            <Img fluid={node.fluid} />
          );
        })}
      </div>
    </div>
  )
}

export default Photog