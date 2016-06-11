import React, { Component } from 'react';

/**
 * Contact form component
 *
 * @author jet.oneza
 */
class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      phone: ''
    };
  }

  _handleSubmit() {
    const {firstName, lastName, phone} = this.refs;

    if (firstName.value.trim() == '') {
      window.alert('Please enter a name.');
      return;
    }

    let data = {
      _id: this.props.data ? this.props.data._id : null,
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

  componentWillReceiveProps(newProps) {
    var {data} = newProps;

    var formData = {
      fistName: '',
      lastName: '',
      phone: ''
    };

    if (data) {
      formData.firstName = data.firstName;
      formData.lastName = data.lastName;
      formData.phone = data.phone;
    }

    this.setState(formData);
  }

  _handleTextChange(e) {
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    let {submitLabel} = this.props;
    let {firstName, lastName, phone} = this.state;

    return (
        <form className="ui form">
          <div className="field">
            <label>Name</label>

            <div className="two fields">
              <div className="field">
                <input ref="firstName" type="text" name="firstName" value={firstName}
                       onChange={this._handleTextChange.bind(this)}
                       placeholder="First Name"/>
              </div>
              <div className="field">
                <input ref="lastName" type="text" name="lastName" value={lastName}
                       onChange={this._handleTextChange.bind(this)}
                       placeholder="Last Name"/>
              </div>
            </div>
            <div className="field">
              <label>Cellphone Number</label>
              <input ref="phone" type="tel" name="phone" value={phone} maxlength="15"
                     onChange={this._handleTextChange.bind(this)}
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