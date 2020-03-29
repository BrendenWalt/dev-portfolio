import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="navigation-container">
        <AnchorLink
          to="/#about-me"
          title="About"
          className="nav-link"
          stripHash
        />
        <AnchorLink
          to="/#portfolio"
          title="Portfolio"
          classname="nav-link"
          stripHash
        />
        <AnchorLink
          to="/#experience"
          title="Experience"
          className="nav-link"
          stripHash
        />
        <AnchorLink 
          to="/#photography"
          title="Photography"
          className="nav-link"
          stripHash
        />
        <AnchorLink 
          to="/#contact"
          title="Contact"
          className="nav-link"
          stripHash
        />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
