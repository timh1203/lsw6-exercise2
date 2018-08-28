import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
  state = {
    people: [
      {
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }
    ]
  }

  removeCharacter = (index) => {
    const { people } = this.state

    this.setState({
      people: people.filter((person, i) => {
        return i !== index
      })
    })
  }

  render() {
    return (
      <div className="Container">
        <h1>Hello, React!</h1>
        <Table 
          people={this.state.people} 
          removeCharacter={this.removeCharacter}
        />
      </div>
    )
  }
}

export default App
