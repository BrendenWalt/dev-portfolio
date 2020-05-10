import React from "react"
import Styles from "./PhotoDivider.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const PhotoDivider = () => {

  const Data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativePath: { regex: "/divider/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      top: file(relativePath: { eq: "divider-02.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={Styles.photoDivider}>
      <div className={Styles.photoDividerTop}>
        {/* <Img fluid={Data.top.childImageSharp.fluid} /> */}
        <Img fluid={Data.allFile.edges[1].node.childImageSharp.fluid} />
      </div>
      <div className={Styles.photoDividerBottom}>
        {/* {Data.allFile.edges.map(({ node }) => (
          <Img fluid={node.childImageSharp.fluid} />
        ))} */}
        <Img fluid={Data.allFile.edges[0].node.childImageSharp.fluid} />
        <Img fluid={Data.allFile.edges[2].node.childImageSharp.fluid} />
      </div>
    </div>
  )
}

export default PhotoDivider