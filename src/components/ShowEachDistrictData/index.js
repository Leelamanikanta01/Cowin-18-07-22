import './index.css'

const ShowEachDistrictData = props => {
  const {name, number} = props

  return (
    <li className="district-list">
      <p className="district-number">{number}</p>
      <p className="district-names">{name}</p>
    </li>
  )
}

export default ShowEachDistrictData
