import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    people: []
  }

  removeCharacter = (index) => {
    const { people } = this.state

    this.setState({
      people: people.filter((person, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (person) => {
    this.setState({
      people: [...this.state.people, person]
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
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
