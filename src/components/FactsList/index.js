import './index.css'

const FactsList = props => {
  const {banner} = props

  return (
    <>
      <li className="facts-list">{banner}</li>
    </>
  )
}

export default FactsList
