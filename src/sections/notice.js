import React from "react"
import CustomTooltip from "../components/tooltip"

const Notice = () => {
  return (
    <section 
      className = "py-4 bg-black text-white text-center text-xs"
      id        = "notice"
      role      = "alert"
    >
      <CustomTooltip 
        title     = "To be silent is to be complicit"
        placement = "right"
        arrow
      >
        <a 
          href   = "https://blacklivesmatter.com"
          target = "_blank"
          rel    = "noopener noreferrer"
        >
          #BlackLivesMatter
        </a>
      </CustomTooltip>
    </section>
  )
}

export default Notice
