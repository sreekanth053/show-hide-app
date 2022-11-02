// Write your code here
import {Component} from 'react'

import './index.css'
import {NONAME} from 'dns'

class ShowHide extends Component {
  state = {isClicked: false, isChecked: false}

  firstName = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  lastName = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  getTextJoe = () => {
    const {isClicked} = this.state
    return isClicked ? <p className="firstName">Joe</p> : NONAME
  }

  getTextJonas = () => {
    const {isChecked} = this.state
    return isChecked ? <p className="lastName">Jonas</p> : NONAME
  }

  render() {
    const textJoe = this.getTextJoe()
    const textJonas = this.getTextJonas()
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons">
          <div className="buttonFirstName">
            <button type="button" className="btn-1" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {textJoe}
          </div>
          <div className="buttonLastName">
            <button type="button" className="btn-2" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {textJonas}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
