import React from "react"
import { Tooltip } from "@components"

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <div>
          <Tooltip
            title     = "Refresh website"
            placement = "top"
            arrow
          >
            {author}
          </Tooltip>
        </div>
        <div className="mt-2 sm:m-0">
          <Tooltip
            title     = "under MIT"
            placement = "top"
            arrow
          >
            {source}
          </Tooltip>
        </div>
      </div>
    </footer>
  )
}

const author = (
  <a className="highlight-link" href="/">
    Made by alexperronnet
  </a>
)

const source = (
  <a
    className = "highlight-link"
    href      = "https://github.com/alexperronnet/alexperronnet.io"
    target    = "_blank"
    rel       = "noopener noreferrer"
  >
    View the source
  </a>
)

export default Footer
