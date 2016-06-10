import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const {contact} = this.props;
    return (
        <div className="ui segment">{contact.firstName} {contact.lastName}</div>
    );
  }
}

export default Contact;