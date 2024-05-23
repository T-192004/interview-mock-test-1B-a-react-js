import './index.css'

const WordItem = props => {
  const {word} = props
  const {character} = word
  return (
    <li className="list-item">
      <p className="word">
        {word.character} : {character.length}
      </p>
    </li>
  )
}

export default WordItem
