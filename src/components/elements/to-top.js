import React from "react"
import { Tooltip } from "@components"
import { FiArrowUpCircle  } from "@components/elements/icons"

const ToTop = () => {
  function scrollMe() {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    })
  }

  return (
    <div>
      <div className="text-white text-xs mt-16">
        <Tooltip
          title     = "BTW It's better than scroll"
          placement = "right"
          arrow
        >
          <button
            className = "p-2 bg-pink hover:bg-pink-foreground rounded-sm flex items-center focus:outline-none"
            onClick   = {scrollMe}
          >
            <FiArrowUpCircle
              className = "mr-2"
              size      = {20}
            />
            BACK TO TOP
          </button>
        </Tooltip>
      </div>
    </div>
  )
}

export default ToTop
