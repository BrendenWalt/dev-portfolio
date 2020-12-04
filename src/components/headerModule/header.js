import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Styles from "./header.module.scss"

const Header = () => {
// class Header extends Component {

  const [scroll, setScroll] = useState(false);


  window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
      setScroll(true);
      console.log('scrolling');
    } else {
      setScroll(false);
    }
  })
    
  return (
    <header className={`${Styles.header} ${scroll && Styles.header_dark}`}>
      <div className={Styles.headerContainer}>
        <div className={Styles.headerLogo}>
          <Link to="/">
            {/* {siteTitle} */}
            {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
            <div className={Styles.headerLogoWrap}>BW</div>
          </Link>
        </div>
        <div className={Styles.navContainer}>
          <ul>
            <li className={Styles.navLink}>
              <AnchorLink to="/#portfolio">Portfolio</AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink to="/#about-me" stripHash>
                About
              </AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink to="/#experience">Experience</AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink to="/#photography">Photography</AnchorLink>
            </li>
            <li className={Styles.navLink}>
              <AnchorLink to="/#contact">Contact</AnchorLink>
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
