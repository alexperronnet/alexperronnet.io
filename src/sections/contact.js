import React from "react"
import Copy from "../components/copy"
import Content from "../components/content"
import CustomArrow from "../components/tooltip"

const contact = () => {
  return (
    <section
      className = "mb-16"
      id        = "contact"
    >
      <h2 className="mb-16">
        Contact
      </h2>
      <Content>
        I am open to lots of new opportunities, freelance or a fulltime position. You can contact me by trying to send a homing pigeon but honestly the best is still to send me an <Email />
      </Content>
      <Content>
        <div className="mt-16">
          <Copy
            before      = "Email:"
            placeholder = "alex@alexperronnet.io"
            value       = "alex@alexperronnet.io"
          />
        </div>
      </Content>
    </section>
  )
}

const Email = () => (
  <CustomArrow
    title     = "Email me"
    placement = "right"
    arrow
  >
    <a
      className = "text-red-700 hover:underline"
      href      = "mailto:alex@alexperronnet.io"
    >
      email
    </a>
  </CustomArrow>
)

export default contact
