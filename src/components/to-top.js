import React from "react"
import CustomTooltip from "./tooltip"
import { FiArrowUpCircle } from "./icons"

const ToTop = () => {
  window.scrollTo({
    behavior: "smooth",
    top: 0
  })

  return (
    <div className="text-white text-xs mt-10">
      <CustomTooltip
        title     = "BTW It's better than scroll"
        placement = "right"
        arrow
      >
        <button
          className = "p-2 bg-blue-500 hover:shadow-md rounded-sm flex items-center focus:outline-none"
          onClick   = {ToTop}
        >
          <FiArrowUpCircle
            className = "mr-2"
            size      = {20}
          />
          BACK TO TOP
        </button>
      </CustomTooltip>
    </div>
  )
}

export default ToTop
