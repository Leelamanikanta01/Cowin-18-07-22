import './index.css'

const FaqsList = props => {
  const {question, answer} = props

  return (
    <li className="faqs-list-content">
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </li>
  )
}

export default FaqsList
