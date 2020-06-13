import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import Img from "gatsby-image"

import Styles from "./header.module.scss"

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query siteLogoQuery {
      file(relativePath: { eq: "placeholder_logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={Styles.header} >
      <div className={Styles.headerContainer} >
        <div className={Styles.headerLogo}>
          <Link to="/">
            {/* {siteTitle} */}
            {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
            <div className={Styles.headerLogoWrap}>
              BW
            </div>
          </Link>
        </div>
        <div className={Styles.navContainer}>
          <ul>
            <li className={Styles.navLink}>
              <AnchorLink
                to="/#about-me"
                stripHash
              >
                About
              </AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink 
                to="/#portfolio"
              >
                Portfolio
              </AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink 
                to="/#experience"
              >
                Experience
              </AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink 
                to="/#photography"
              >
                Photography
              </AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink 
                to="/#contact"
              >
                Contact
              </AnchorLink>
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
