import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import WordItem from '../WordItem'
import './index.css'

class CharacterCounter extends Component {
  state = {wordsList: [], character: ''}

  updateCharacter = event => {
    this.setState({character: event.target.value})
  }

  updateWordsList = event => {
    event.preventDefault()
    const {character} = this.state
    const word = {
      id: uuidv4(),
      character,
    }
    this.setState(prev => ({
      wordsList: [...prev.wordsList, word],
      character: '',
    }))
  }

  render() {
    const {wordsList, character} = this.state
    return (
      <div className="app-container">
        <div className="result-section">
          <div className="result-top-section">
            <h1 className="result-main-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          <div className="result-bottom-section">
            {wordsList.length === 0 ? (
              <img
                className="result-section-img"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="words-list-section">
                {wordsList.map(word => (
                  <WordItem word={word} key={word.id} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="input-section">
          <h1 className="input-main-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.updateWordsList}>
            <input
              className="input-box"
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.updateCharacter}
              value={character}
            />
            <button className="input-add-btn" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
