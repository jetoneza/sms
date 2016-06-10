import React, { Component } from 'react';

import Contact from './Contact.jsx'

/**
 * Contacts list component
 *
 * @author jet.oneza
 */
class ContactsList extends Component {

  renderContacts() {
    return this.props.contacts.map((contact) => {
      return <Contact key={contact._id} contact={contact}/>;
    });
  }

  render() {
    return (
        <div className="ui text container contacts">
          <table className="ui selectable green table">
            <tbody>
            {this.renderContacts()}
            </tbody>
          </table>
        </div>
    );
  }
}

export default ContactsList;