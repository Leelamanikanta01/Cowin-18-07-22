import {Component} from 'react'
import {ImMenu2} from 'react-icons/im'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {
    isToggle: false,
  }

  showActiveMethod = () => {
    this.setState(prevState => ({isToggle: !prevState.isToggle}))
  }

  ToggleButtonActive = () => (
    <>
      <ul className="link-items">
        <Link className="link" to="/">
          <li className="item">HOME</li>
        </Link>

        <Link className="link" to="/about">
          <li className="item">About</li>
        </Link>

        <Link className="link" to="/vaccination">
          <li className="item">Vaccination</li>
        </Link>
      </ul>
    </>
  )

  render() {
    const {isToggle} = this.state
    console.log(isToggle)

    return (
      <>
        <div className="header-main-container">
          <Link className="link" to="/">
            <h1 className="header-heading">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>
          <ul className="link-items">
            <Link className="link" to="/">
              <li className="item">HOME</li>
            </Link>

            <Link className="link" to="/about">
              <li className="item">About</li>
            </Link>

            <Link className="link" to="/vaccination">
              <li className="item">Vaccination</li>
            </Link>
          </ul>
        </div>

        <div className="mobile-header-container">
          <div className="header-container">
            <Link className="link" to="/">
              <h1 className="header-heading">
                COVID19<span className="india">INDIA</span>
              </h1>
            </Link>
            <button
              className="toggle-button"
              type="button"
              onClick={this.ToggleButtonActive}
            >
              <ImMenu2 className="menuIcon" alt="menu" />
            </button>
          </div>
          <div className="menu">
            {isToggle ? this.ToggleButtonActive() : null}
          </div>
        </div>
      </>
    )
  }
}

export default Header
