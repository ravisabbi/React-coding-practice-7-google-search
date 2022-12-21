// Write your code here
import './index.css'

const SuggetionItem = props => {
  const {suggestionDetails, onFullSuggestion} = props
  const {suggestion} = suggestionDetails
  const onDeleteItem = () => {
    onFullSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onDeleteItem}
      />
    </li>
  )
}

export default SuggetionItem
