import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import FaqsList from '../FaqsList'
import FactsList from '../FactsList'

import './index.css'

class About extends Component {
  state = {
    isLoading: true,
    faqData: {},
    factsData: {},
  }

  componentDidMount = () => {
    this.getAllData()
  }

  renderLoadingView = () => (
    <>
      <div className="loader-container" testid="aboutRouteLoader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </div>
    </>
  )

  getAllData = () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'
    const option = {
      method: 'GET',
    }

    const response = fetch(apiUrl, option)
    if (response.ok) {
      const data = response.json()
      console.log(data)

      const updatedFactoidsData = data.factoids.map(each => ({
        key: each.id,
        banner: each.banner,
      }))

      const updatedFaqsData = data.faq.map(each => ({
        key: each.qno,
        question: each.question,
        answer: each.answer,
      }))

      this.setState({
        isLoading: false,
        faqData: updatedFaqsData,
        factsData: updatedFactoidsData,
      })
    } else {
      console.log('Data is not found')
    }
  }

  renderAllData = () => {
    const {faqData, factsData} = this.state

    return (
      <>
        <ul className="faqs-list" testid="faqsUnorderedList">
          {faqData.map(each => (
            <FaqsList
              key={each.qno}
              question={each.question}
              answer={each.answer}
            />
          ))}
        </ul>

        <h1 className="about-para">Facts</h1>
        <ul className="facts-list">
          {factsData.map(each => (
            <FactsList key={each.id} banner={each.banner} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        <Header />
        <div className="about-main-container">
          {isLoading ? (
            this.renderLoadingView()
          ) : (
            <div className="about-content-container">
              <h1 className="about-heading">About</h1>
              <p className="about-description">
                Last update on march 25th 2021.
              </p>
              <p className="about-para">
                Covid-19 Vaccines be ready for distribute
              </p>
              <div className="facts-item-list">{this.renderAllData()}</div>
            </div>
          )}
        </div>
        <Footer />
      </>
    )
  }
}

export default About
