/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../headerModule/header"
import "./layout.css"
import "./footer.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="siteContainer">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer className="footer">
        <h4 className="footer-title has-text-centered">
         Brenden Walters
        </h4>
        <div className="content has-text-centered">
          © {new Date().getFullYear()} // Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
