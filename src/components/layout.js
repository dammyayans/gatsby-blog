import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import "../styles/index.scss"
import layout from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layout.container}>
      <div className={layout.content}>
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
