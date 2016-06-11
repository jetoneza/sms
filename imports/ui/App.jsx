import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Contacts } from '../api/contacts.js';

import ContactsList from './contacts/ContactsList.jsx';
import AddContactModal from './common/AddContactModal.jsx';
import EditContactModal from './common/EditContactModal.jsx';

/**
 * Main app component
 *
 * @author jet.oneza
 */
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeContact: null
    };
  }

  _handleAddClick() {
    this.refs.addModal.show();
  }

  handleEditClick(activeContact) {
    this.setState({activeContact});

    this.refs.editModal.show();
  }

  render() {
    return (
        <div className="app">
          <h3 className="ui center aligned header">Contacts
            <button className="ui green label" onClick={this._handleAddClick.bind(this)}>Add Contact
            </button>
          </h3>
          <ContactsList contacts={this.props.contacts}
                        handleEditClick={this.handleEditClick.bind(this)}/>

          <AddContactModal ref="addModal"/>
          <EditContactModal ref="editModal" data={this.state.activeContact}/>
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
