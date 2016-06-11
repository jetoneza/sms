import React, { Component } from 'react';

import ContactForm from './ContactForm.jsx';

/**
 * Edit contact modal component
 *
 * @author jet.oneza
 */
class EditContactModal extends Component {

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
    Meteor.call('contacts.update', data);
    this.close();
  }

  render() {
    return (
        <div ref="modal" className="ui modal">
          <i className="close icon"></i>

          <div className="header">
            Edit Contact
          </div>
          <div className="content">
            <ContactForm submitLabel="Edit" handleSubmit={this.handleSubmit.bind(this)}
                         data={this.props.data}/>
          </div>
        </div>
    );
  }
}

export default EditContactModal;