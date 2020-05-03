import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import Styles from "./header.module.scss"

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query siteLogoQuery {
      file(relativePath: { eq: "placeholder_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={Styles.header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
        className={Styles.headerContainer}
      >
        <div className={Styles.headerLogo}>
          <Link to="/">
            {/* {siteTitle} */}
            <Img fluid={data.file.childImageSharp.fluid} />
          </Link>
        </div>
        <div className={Styles.navContainer}>
          <ul>
            <li className={Styles.navLinK}>
              <Link to="/#about-me" >
                About
              </Link>
            </li>
            <li>
              <Link to="/#portfolio">
                Portfolio
              </Link>
            </li>
            <li className={Styles.navLink}>
              <Link to="/#experience" >
                Experience
              </Link>
            </li>
            <li className={Styles.navLink}>
              <Link to="/#photography">
                Photography
              </Link>
            </li>
            <li className={Styles.navLink}>
              <Link to="/#contact">
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
