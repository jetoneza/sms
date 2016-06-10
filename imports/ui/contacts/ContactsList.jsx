import React, { Component } from 'react';

import Contact from './Contact.jsx'

class ContactsList extends Component {

  renderContacts() {
    return this.props.contacts.map((contact) => {
      return <Contact key={contact._id} contact={contact}/>;
    });
  }

  render() {
    return (
        <div className="ui text container contacts">
          <div className="ui segments">
            {this.renderContacts()}
          </div>
        </div>
    );
  }
}

export default ContactsList;