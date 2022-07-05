import './index.css'

const ShowEachDistrictData = props => {
  const {name, number} = props

  return (
    <li className="district-list">
      <p className="district-name">{name}</p>
      <p className="district-number">{number}</p>
    </li>
  )
}

export default ShowEachDistrictData
