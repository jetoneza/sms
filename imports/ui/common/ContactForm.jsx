import React, { Component } from 'react';

/**
 * Contact form component
 *
 * @author jet.oneza
 */
class ContactForm extends Component {

  _handleSubmit() {
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
    this._clearData();
    this.props.handleSubmit(data);
  }

  _clearData() {
    var {firstName, lastName, phone} = this.refs;
    firstName.value = lastName.value = phone.value = '';
  }

  _getData() {
    var {data} = this.props;

    var formData = {
      fistName: '',
      lastName: '',
      phone: ''
    };

    if (data) {
      formData.fistName = data.firstName;
      formData.lastName = data.lastName;
      formData.phone = data.phone;
    }

    return formData;
  }

  render() {
    let {submitLabel} = this.props;

    var data = this._getData();

    return (
        <form className="ui form">
          <div className="field">
            <label>Name</label>

            <div className="two fields">
              <div className="field">
                <input ref="firstName" type="text" name="firstName" defaultValue={data.firstName}
                       placeholder="First Name"/>
              </div>
              <div className="field">
                <input ref="lastName" type="text" name="lastName" defaultValue={data.lastName}
                       placeholder="Last Name"/>
              </div>
            </div>
            <div className="field">
              <label>Cellphone Number</label>
              <input ref="phone" type="tel" name="number" defaultValue={data.phone} maxlength="15"
                     placeholder="Cellphone #"/>
            </div>
          </div>
          <div className="ui green button" onClick={this._handleSubmit.bind(this)}>{submitLabel}
          </div>
        </form>
    );
  }
}

export default ContactForm;