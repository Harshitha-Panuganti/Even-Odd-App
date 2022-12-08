import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrementCounter = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="evenOddContainer">
        <h1 className="heading">Count {count}</h1>
        <p className="desc">Count is {displayText}</p>
        <button
          className="button"
          type="button"
          onClick={this.onIncrementCounter}
        >
          Increment
        </button>
        <p className="counter-para">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}
export default EvenOddApp
