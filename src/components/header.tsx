import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// import assets 
import gatsbyLogo from '../images/gatsby-icon.png';

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div className="row">
        <h1 style={{ margin: 0 }}>
            {siteTitle}
        </h1>
      </div>
      <div className="row">
        <h3>
          <Link 
            to="/"
            style={{ textDecoration: `none` }}
          >
            Home
          </Link>
        </h3>
        <p>|</p>
        <h3>
          <Link 
            to="/about/"
            style={{ textDecoration: `none` }}
          >
            About Me
          </Link>
        </h3>
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
