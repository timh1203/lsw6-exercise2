import React, { Component } from 'react'

class Table extends Component {
  render() {
    const { people } = this.props
    const TableHeader = () => { 
      return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
      );
    }

    const TableBody = (props) => { 
      const people = props.people.map((person, i) => {
        return (
          <tr key={i}>
            <td>{person.name}</td>
            <td>{person.job}</td>
          </tr>
        )
      })

      return (
        <tbody>
          {people} 
        </tbody>
      );
    }

    return (
      <table>
        <TableHeader />
        <TableBody people={people}/>  
      </table>
    );
  }
}

export default Table