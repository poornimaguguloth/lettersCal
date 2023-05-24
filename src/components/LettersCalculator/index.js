// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: 0,
  }

  onChangeSearchInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state

    return (
      <div className="bg-container">
        <div className="items">
          <div className="description-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="letterSearch">Enter the phrase</label>
              <br />
              <input
                id="letterSearch"
                type="text"
                placeholder="Enter the phrase"
                onChange={this.onChangeSearchInput}
              />
            </div>
            <br />
            <p type="button" className="letters-count">
              No.of letters : {inputText.length}
            </p>
          </div>

          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
