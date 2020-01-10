/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import AppBar from "./appbar"
import { Helmet } from "react-helmet"

// const ListLink = ({ to, children }) => (
//   <li className="link">{/* <Link to={to}>{children}</Link> */}</li>
// )

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
    <div className="container-fluid">
      <AppBar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <main>{children}</main>
      <footer>
        <div className="copy">
          &copy; {new Date().getFullYear()} <strong>Joanna Chądzyńska</strong>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
