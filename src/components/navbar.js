import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import navbarStyles from "./navbar.module.scss"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={navbarStyles.navbar}>
      <h1>
        <Link to="/" className={navbarStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <ul className={navbarStyles.nav_list}>
        <li>
          <Link
            to="/"
            className={navbarStyles.nav_item}
            activeClassName={navbarStyles.active_nav_item}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={navbarStyles.nav_item}
            activeClassName={navbarStyles.active_nav_item}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={navbarStyles.nav_item}
            activeClassName={navbarStyles.active_nav_item}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={navbarStyles.nav_item}
            activeClassName={navbarStyles.active_nav_item}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}
export default Navbar
