import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Contacts } from '../api/contacts.js';

import ContactsList from './contacts/ContactsList.jsx';

class App extends Component {
  render() {
    return (
        <div className="app">
          <h3 className="ui center aligned header">Contacts
            <div className="ui green label">Add</div>
          </h3>
          <ContactsList contacts={this.props.contacts}/>
        </div>
    );
  }
}

App.proptTypes = {
  contacts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('contacts');

  return {
    contacts: Contacts.find({}, {sort: {createdAt: -1}}).fetch(),
  };
}, App);
