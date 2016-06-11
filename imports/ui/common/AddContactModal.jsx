import React, { Component } from 'react';

import ContactForm from './ContactForm.jsx';

/**
 * Add contact modal component
 *
 * @author jet.oneza
 */
class AddContactModal extends Component {

  componentDidMount() {
    $(this.refs.modal).modal();
  }

  show() {
    $(this.refs.modal).modal('show');
  }

  close() {
    $(this.refs.modal).modal('hide');
  }

  handleSubmit(data) {
    Meteor.call('contacts.insert', data);
    this.close();
  }

  render() {
    return (
        <div ref="modal" className="ui modal">
          <i className="close icon"></i>

          <div className="header">
            Add Contact
          </div>
          <div className="content">
            <ContactForm submitLabel="Add" handleSubmit={this.handleSubmit.bind(this)}/>
          </div>
        </div>
    );
  }
}

export default AddContactModal;