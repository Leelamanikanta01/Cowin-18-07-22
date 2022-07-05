import {FiInstagram} from 'react-icons/fi'
import {VscGithubAlt} from 'react-icons/vsc'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-heading">
        COVID19<span className="india">INDIA</span>
      </h1>
      <p className="tagline">
        We stand with everyone fighting on the front lines
      </p>
      <div className="icons-container">
        <FiInstagram className="icon" />
        <VscGithubAlt className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  )
}

export default Footer
