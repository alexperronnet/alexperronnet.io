import React from "react"

const Clock = () => {
  return (
    <div className="mt-10 text-xs">
      <p>It's <ClockTime /></p>
      <p>Just in case you are a time traveler</p>
    </div>
  )
}

class ClockTime extends React.Component {
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
    return <span>{this.state.date.toLocaleString()}</span>
  }
}

export default Clock
