import {Component} from 'react'

import './index.css'

class StateTotalData extends Component {
  state = {
    confirmedData: {},
    activeData: {},
    recoveredData: {},
    deceasedData: {},
  }

  getEachStateData = () => {
    const {eachStateTotalData} = this.props

    const totalConfirmedCasesData = eachStateTotalData.confirmed
    const totalRecoveredCasesData = eachStateTotalData.recovered
    const totalDeceasedCasesData = eachStateTotalData.deceased

    const totalActiveCasesData =
      totalConfirmedCasesData - totalRecoveredCasesData - totalDeceasedCasesData

    const confirmedData = {
      name: 'Confirmed',
      logo:
        'https://res.cloudinary.com/amst/image/upload/v1639929248/conf_cof3e9.jpg',
      value: totalConfirmedCasesData,
    }

    const activeData = {
      name: 'Active',
      logo:
        'https://res.cloudinary.com/amst/image/upload/v1639929248/act_kq7nfx.jpg',
      value: totalActiveCasesData,
    }

    const recoveredData = {
      name: 'Recovered',
      logo:
        'https://res.cloudinary.com/amst/image/upload/v1639929248/uyf_ndpqov.jpg',
      value: totalRecoveredCasesData,
    }

    const deceasedData = {
      name: 'Deceased',
      logo:
        'https://res.cloudinary.com/amst/image/upload/v1639929248/dese_tgak4e.jpg',
      value: totalDeceasedCasesData,
    }

    this.setState({
      confirmedData,
      activeData,
      recoveredData,
      deceasedData,
    })
  }

  onGetTotal = value => {
    const {onGetCategory} = this.props
    onGetCategory(value)
  }

  render() {
    const {confirmedData, activeData, recoveredData, deceasedData} = this.state

    const {active} = this.props
    const activeIsLoading = active ? 'confirmed-block' : ''

    return (
      <>
        <ul className="state-list-item">
          <li
            className={`category-item ${confirmedData.name} ${activeIsLoading}`}
            tabIndex="-1"
            key={confirmedData.name}
            value={confirmedData.name}
            onClick={() => this.onGetTotal(confirmedData.name)}
          >
            <div testid="stateSpecificConfirmedCasesContainer">
              <p className="state-heading">{confirmedData.name}</p>
              <img
                src={confirmedData.logo}
                alt="state specific confirmed cases pic"
                className="state-img"
              />
              <p className="state-value">{confirmedData.value}</p>
            </div>
          </li>

          <li
            className={`category-item ${activeData.name}`}
            tabIndex="-1"
            key={activeData.name}
            value={activeData.name}
            onClick={() => this.onGetTotal(activeData.name)}
          >
            <div testid="stateSpecificActiveCasesContainer">
              <p className="state-heading">{activeData.name}</p>
              <img
                src={activeData.logo}
                alt="state specific active cases pic"
                className="state-img"
              />
              <p className="state-value">{activeData.value}</p>
            </div>
          </li>

          <li
            className={`category-item ${recoveredData.name}`}
            tabIndex="-1"
            key={recoveredData.name}
            value={recoveredData.name}
            onClick={() => this.onGetTotal(recoveredData.name)}
          >
            <div testid="stateSpecificRecoveredCasesContainer">
              <p className="state-heading">{recoveredData.name}</p>
              <img
                src={recoveredData.logo}
                alt="state specific recovered cases pic"
                className="state-img"
              />
              <p className="state-value">{recoveredData.value}</p>
            </div>
          </li>

          <li
            className={`category-item ${deceasedData.name} ${activeIsLoading}`}
            tabIndex="-1"
            key={deceasedData.name}
            value={deceasedData.name}
            onClick={() => this.onGetTotal(deceasedData.name)}
          >
            <div testid="stateSpecificDeceasedCasesContainer">
              <p className="state-heading">{deceasedData.name}</p>
              <img
                src={deceasedData.logo}
                alt="state specific deceased cases pic"
                className="state-img"
              />
              <p className="state-value">{deceasedData.value}</p>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default StateTotalData
