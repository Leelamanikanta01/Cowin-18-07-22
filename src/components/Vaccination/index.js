import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

class Vaccination extends Component {
  renderLoader = () => (
    <>
      <div className="loader-container" testid="aboutRouteLoader">
        <Loader type="Hearts" color="#ffffff" height="50" width="50" />
      </div>
    </>
  )

  render() {
    return (
      <>
        <Header />
        <div className="vaccination-main-container">
          <div className="about-content-container">
            <h1 className="about-title">Vaccination</h1>
            <p className="about-description">Last update on 25th march 2021</p>
            <p className="about-vaccine-title">
              Covid-19 vaccination is ready to serve
            </p>
            <p className="about-vaccine-title">
              Sorry! this page under construction
            </p>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Vaccination
