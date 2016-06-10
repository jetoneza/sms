import React, { Component } from 'react';

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

  _handleAddContact() {
    const {firstName, lastName, phone} = this.refs;

    if (firstName.value.trim() == '') {
      window.alert('Please enter a name.');
      return;
    }

    let data = {
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
      phone: phone.value.trim()
    }

    Meteor.call('contacts.insert', data);

    this.close();
    this._clearData();
  }

  _clearData() {
    var {firstName, lastName, phone} = this.refs;
    firstName.value = lastName.value = phone.value = '';
  }

  render() {
    return (
        <div ref="modal" className="ui modal">
          <i className="close icon"></i>

          <div className="header">
            Add Contact
          </div>
          <div className="content">
            <form className="ui form">
              <div className="field">
                <label>Name</label>

                <div className="two fields">
                  <div className="field">
                    <input ref="firstName" type="text" name="firstName" placeholder="First Name"/>
                  </div>
                  <div className="field">
                    <input ref="lastName" type="text" name="lastName" placeholder="Last Name"/>
                  </div>
                </div>
                <div className="field">
                  <label>Cellphone Number</label>
                  <input ref="phone" type="tel" name="number" maxlength="15"
                         placeholder="Cellphone #"/>
                </div>
              </div>
            </form>
          </div>
          <div className="actions">
            <div className="ui red button" onClick={this.close.bind(this)}>Cancel</div>
            <div className="ui green button" onClick={this._handleAddContact.bind(this)}>Add</div>
          </div>
        </div>
    );
  }
}

export default AddContactModal;