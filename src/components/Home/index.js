import {Component} from 'react'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import Footer from '../Footer'
import SearchResult from '../SearchResult'
import TotalStats from '../TotalStats'

import './index.css'

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    isLoading: true,
    isActiveState: 0,
    isConfirmedState: 0,
    isDecreasedState: 0,
    isRecoveredState: 0,
    search: '',
    filteredList: [],
    statesInfo: [],
  }

  componentDidMount() {
    this.getAllData()
  }

  getAllData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()

      let nationalWideConfirmedCases = 0
      let nationalWideRecoveredCases = 0
      let nationalWideDeceasedCases = 0
      let nationalWideActiveCases = 0

      statesList.forEach(state => {
        if (data[state.state_code]) {
          const {total} = data[state.state_code]
          nationalWideConfirmedCases += total.confirmed ? total.confirmed : 0
          nationalWideDeceasedCases += total.deceased ? total.deceased : 0
          nationalWideRecoveredCases += total.recovered ? total.recovered : 0
        }
      })
      nationalWideActiveCases +=
        nationalWideConfirmedCases -
        (nationalWideRecoveredCases + nationalWideDeceasedCases)

      const states = statesList.map(eachState => ({
        stateName: eachState.state_name,
        stateCode: eachState.state_code,
        confirmed: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.confirmed),
        recovered: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.recovered),
        deceased: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.deceased),
        other: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].total.other),
        population: Object.keys(data)
          .filter(state => state === eachState.state_code)
          .map(e => data[e].meta.population),
      }))

      this.setState({
        isActiveState: nationalWideActiveCases,
        isRecoveredState: nationalWideRecoveredCases,
        isDecreasedState: nationalWideDeceasedCases,
        isConfirmedState: nationalWideConfirmedCases,
        isLoading: false,
        statesInfo: states,
      })
    }
  }

  renderAllNationalWideData = () => {
    const {
      isActiveState,
      isConfirmedState,
      isDecreasedState,
      isRecoveredState,
    } = this.state

    return (
      <>
        <div className="state-list-column" testid="countryWideConfirmedCases">
          <p className="state-title red">Confirmed</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/conf_cof3e9.jpg"
            className="state-wide-case"
            alt="country wide confirmed cases pic"
          />
          <p className="state-heading red">{isConfirmedState}</p>
        </div>

        <div className="state-list-column" testid="countryWideActiveCases">
          <p className="state-title blue">Active</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/act_kq7nfx.jpg"
            className="state-wide-case"
            alt="country wide active cases pic"
          />
          <p className="state-heading blue">{isActiveState}</p>
        </div>

        <div className="state-list-column" testid="countryWideRecoveredCases">
          <p className="state-title green">Recovered</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/uyf_ndpqov.jpg"
            className="state-wide-case"
            alt="country wide recovered cases pic"
          />
          <p className="state-heading green">{isRecoveredState}</p>
        </div>

        <div className="state-list-column" testid="countryWideDeceasedCases">
          <p className="state-title grey">Deceased</p>
          <img
            src="https://res.cloudinary.com/amst/image/upload/v1639929248/dese_tgak4e.jpg"
            className="state-wide-case"
            alt="country wide deceased cases pic"
          />
          <p className="state-heading grey">{isDecreasedState}</p>
        </div>
      </>
    )
  }

  renderLoadingView = () => (
    <div
      className="products-details-loader-container loader-container"
      testid="homeRouteLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  ascendingSortButtonClick = () => {
    const {statesInfo} = this.state
    const sortedList = statesInfo.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x > y ? 1 : -1
    })
    this.setState({statesInfo: sortedList})
  }

  descendingSortButtonClick = () => {
    const {statesInfo} = this.state
    const sortedList = statesInfo.sort((a, b) => {
      const x = a.stateName.toUpperCase()
      const y = b.stateName.toUpperCase()
      return x < y ? 1 : -1
    })
    this.setState({statesInfo: sortedList})
  }

  renderAllStateWideData = () => {
    const {statesInfo} = this.state

    return (
      <div className="state-wise-column">
        <div className="state-list">
          <div className="state-list-container">
            <button
              className="button"
              type="button"
              testid="ascendingSort"
              onClick={this.ascendingSortButtonClick}
            >
              <FcGenericSortingAsc className="order-icon" />
            </button>
            <p className="state-header-title">states/UT</p>
            <button
              className="button"
              type="button"
              testid="descendingSort"
              onClick={this.descendingSortButtonClick}
            >
              <FcGenericSortingDesc className="order-icon" />
            </button>
          </div>
          <div className="other-table-bar">
            <p className="table-title-header">Confirmed</p>
          </div>

          <div className="other-table-bar">
            <p className="table-title-header">Active</p>
          </div>

          <div className="other-table-bar">
            <p className="table-title-header">Recovered</p>
          </div>

          <div className="other-table-bar">
            <p className="table-title-header">Deceased</p>
          </div>

          <div className="other-table-bar">
            <p className="table-title-header">Population</p>
          </div>
        </div>
        <div className="state-wise-data-container">
          <ul className="other-tables">
            {statesInfo.map(each => (
              <TotalStats key={each.stateCode} data={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  searchState = event => {
    const searchItem = event.target.value
    const searchResult = statesList.filter(data =>
      data.state_name.toLowerCase().includes(searchItem.toLowerCase()),
    )

    return this.setState({
      search: event.target.value,
      filteredList: searchResult,
    })
  }

  showSearchList = () => {
    const {filteredList} = this.state

    return (
      <>
        <ul className="search-result-list" testid="searchResultsUnorderedList">
          {filteredList.map(each => (
            <SearchResult
              key={each.state_code}
              stateName={each.state_name}
              stateCode={each.state_code}
              id={each.state_code}
            />
          ))}
        </ul>
      </>
    )
  }

  removeFilteredList = () => {
    this.setState({filteredList: []})
  }

  render() {
    const {filteredList, search, isLoading} = this.state
    const showSearchList =
      filteredList.length === 0 ? '' : this.showSearchList()

    return (
      <>
        <Header />
        <div className="home-main-container">
          <div className="home-responsive-container">
            <div className="home-content-container">
              <BsSearch testid="searchIcon" className="search-icon" />
              <input
                type="search"
                placeholder="Enter The State"
                className="search-input"
                onChange={this.searchState}
                onAbort={this.removeFilteredList}
              />
            </div>
            {search.length > 0 ? showSearchList : ''}
            {isLoading ? (
              this.renderLoaderView
            ) : (
              <div className="card-container">
                <div className="state-country-container">
                  {this.renderAllNationalWideData()}
                </div>

                <div className="state-container">
                  {this.renderAllStateWideData()}
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
