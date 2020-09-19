import React from "react"
import PropTypes from "prop-types"
import { Metas, AlertTop, Footer } from "@components"

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <Metas />
      <AlertTop />
      <main
        className = "container"
        id        = "main"
        role      = "main"
      >
        {children}
      </main>
      <Footer />
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default Wrapper
