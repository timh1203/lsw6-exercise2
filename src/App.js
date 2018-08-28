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


// USING API TO PULL FROM WIKIPEDIA AND USING LIFE CYCLE METHODS
// class App extends Component {
//   state = {
//       data: []
//   };

//   // Code is invoked after the component is mounted/inserted into the DOM tree.
//   componentDidMount() {
//       const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

//       fetch(url)
//           .then(result => result.json())
//           .then(result => {
//               this.setState({
//                   data: result
//               })
//           });
//   }

//   render() {
//       const { data } = this.state;

//       const result = data.map((entry, index) => {
//           return <li key={index}>{entry}</li>;
//       });

//       return <ul>{result}</ul>;
//   }
// }

export default App
