import React from "react"
import { Tooltip } from "@components"

const AlertTop = () => {
  return (
    <div
      id   = "alert-top"
      role = "alert"
    >
      <div className="container">
        <Tooltip 
          title     = "To be silent is to be complicit"
          placement = "right"
          arrow
        >
          <a
            className = "highlight-link"
            href      = "https://blacklivesmatter.com"
            target    = "_blank"
            rel       = "noopener noreferrer"
          >
            Black Lives Matter
          </a>
        </Tooltip>
      </div>
    </div>
  )
}

export default AlertTop
