import {Link} from 'react-router-dom'

import './index.css'

const TotalStats = props => {
  const {data} = props
  const {
    stateName,
    recovered,
    deceased,
    confirmed,
    other,
    population,
    stateCode,
  } = data

  const active = confirmed - recovered - deceased - other

  return (
    <li className="state-name-list">
      <Link to={`/state/${stateCode}`} className="state-link">
        <p className="description">{stateName}</p>
      </Link>
      <p className="conform-state">{confirmed}</p>
      <p className="active-state">{active}</p>
      <p className="recovery-state">{recovered}</p>
      <p className="decreased-state">{deceased}</p>
      <p className="population-state">{population}</p>
    </li>
  )
}

export default TotalStats
