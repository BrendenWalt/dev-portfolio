import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

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
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {/* {siteTitle} */}
            <Img fluid={data.file.childImageSharp.fluid} />
          </Link>
        </div>
        <div className="navigation-container">
          <AnchorLink
            to="#about-me"
            title="About"
            className="nav-link"
          />
          <AnchorLink
            to="#portfolio"
            title="Portfolio"
            classname="nav-link"
          />
          <AnchorLink
            to="#experience"
            title="Experience"
            className="nav-link"
          />
          <AnchorLink
            to="#photography"
            title="Photography"
            className="nav-link"
          />
          <AnchorLink
            to="#contact"
            title="Contact"
            className="nav-link"
          />
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
