import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Contacts } from '../../api/contacts.js';

import ContactsList from './ContactsList.jsx';
import AddContactModal from '../common/AddContactModal.jsx';
import EditContactModal from '../common/EditContactModal.jsx';

/**
 * Contacts wrapper component
 *
 * @author jet.oneza
 */
class ContactsWrapper extends Component {

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
    var contactsList = <ContactsList contacts={this.props.contacts}
                                     handleEditClick={this.handleEditClick.bind(this)}/>;

    if (this.props.contacts.length == 0) {
      contactsList = (
          <div className="ui success message">
            <div className="header">
              Your contacts list is empty.
            </div>
            <p>Add your very first contact now!</p>
          </div>
      );
    }

    return (
        <div className="contacts-wrapper">
          <h3 className="ui center aligned header">Contacts
            <button className="ui green label" onClick={this._handleAddClick.bind(this)}>Add Contact
            </button>
          </h3>
          <div className="ui text container contacts">
            {contactsList}
          </div>
          <AddContactModal ref="addModal"/>
          <EditContactModal ref="editModal" data={this.state.activeContact}/>
        </div>
    );
  }
}

ContactsWrapper.proptTypes = {
  contacts: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('contacts');

  return {
    contacts: Contacts.find({}, {sort: {createdAt: -1}}).fetch(),
  };
}, ContactsWrapper);
