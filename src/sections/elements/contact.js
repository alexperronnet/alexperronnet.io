import React from "react"
import { Copy, Tooltip } from "@components"

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="mb-16">
        Contact
      </h2>
      <div className="content-box">
        <p>
          I am open to lots of new opportunities, freelance or a fulltime position. You can contact me by trying to send a homing pigeon but honestly the best is still to send me an {email}.
        </p>
      </div>
      <div className="content-box mt-16">
        <Copy
          before      = "Email:"
          placeholder = "alex@alexperronnet.io"
          value       = "alex@alexperronnet.io"
        />
      </div>
    </section>
  )
}

const email = (
  <Tooltip
    title     = "Email me"
    placement = "right"
    arrow
  >
    <a
      className = "highlight-link"
      href      = "mailto:alex@alexperronnet.io"
    >
      email
    </a>
  </Tooltip>
)

export default Contact
