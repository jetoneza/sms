import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Contacts } from '../api/contacts.js';

import ContactsList from './contacts/ContactsList.jsx';
import AddContactModal from './common/AddContactModal.jsx';

class App extends Component {

  _handleAddClick() {
    this.refs.modal.show();
  }

  render() {
    return (
        <div className="app">
          <h3 className="ui center aligned header">Contacts
            <button className="ui green label" onClick={this._handleAddClick.bind(this)}>Add Contact
            </button>
          </h3>
          <ContactsList contacts={this.props.contacts}/>

          <AddContactModal ref="modal"/>
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
