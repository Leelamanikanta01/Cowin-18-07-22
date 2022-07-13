import {Link} from 'react-router-dom'

import './index.css'

const TotalStats = props => {
  const {data} = props
  const {
    stateName,
    recovered,
    decreased,
    confirmed,
    other,
    population,
    stateCode,
  } = data

  const active = confirmed - recovered - decreased - other

  return (
    <>
      <li className="state-name-list">
        <div className="state-main-container">
          <Link to={`/state/${stateCode}`} className="state-link">
            <p className="description">{stateName}</p>
          </Link>
        </div>

        <div className="home-container">
          <p className="conform-state">{confirmed}</p>
        </div>

        <div className="home-container">
          <p className="active-state">{active}</p>
        </div>

        <div className="home-container">
          <p className="conform-state">{recovered}</p>
        </div>

        <div className="home-container">
          <p className="decreased-state">{decreased}</p>
        </div>

        <div className="home-container">
          <p className="population-state">{population}</p>
        </div>

        <div className="home-container">
          <p className="other-state">{other}</p>
        </div>
      </li>
    </>
  )
}

export default TotalStats
