import {Link} from 'react-router-dom'
import {BiChevronRightSquare} from 'react-icons/bi'

import './index.css'

const SearchResult = props => {
  const {stateName, stateCode, id} = props

  return (
    <li>
      <Link className="search-link" to={`/state/${id}`}>
        <div className="search-main-container">
          <h1 className="search-heading">{stateName}</h1>
          <button className="search-button" type="button">
            {stateCode}
            <BiChevronRightSquare
              alt="icon search"
              className="icon"
              testid="searchResultChevronRightIcon"
            />
          </button>
        </div>
      </Link>
    </li>
  )
}

export default SearchResult
