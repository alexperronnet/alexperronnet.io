import React from "react"
import { FiClock } from "./icons"

class Clock extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="mt-10 sm:flex sm:flex-row sm:items-center">
        <FiClock
          className = "mr-4 hidden sm:block"
          size      = {24}
        />
        <div className="text-xs ">
          <p>Just in case you are a time traveler</p>
          <p>It's {this.state.date.toLocaleString()}.</p>
        </div>
      </div>
    )
  }
}

export default Clock
