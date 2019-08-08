import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import { connect } from 'react-redux';
import { addPerson } from '../store/actions/actions';

class Persons extends Component {
  //   state = {
  //     persons: []
  //   };

  //   personAddedHandler = () => {
  //     const newPerson = {
  //       id: Math.random(), // not really unique but good enough here!
  //       name: 'Max',
  //       age: Math.floor(Math.random() * 40)
  //     };
  //     this.setState(prevState => {
  //       return { persons: prevState.persons.concat(newPerson) };
  //     });
  //   };

  //   personDeletedHandler = personId => {
  //     this.setState(prevState => {
  //       return {
  //         persons: prevState.persons.filter(person => person.id !== personId)
  //       };
  //     });
  //   };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.addPerson} />
        {this.props.persons.map(person => (
          <Person key={person.id} name={person.name} age={person.age} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPerson: () => dispatch(addPerson())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
