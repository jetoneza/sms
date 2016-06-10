import React, { Component } from 'react';

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
                    <input type="text" name="firstName" placeholder="First Name"/>
                  </div>
                  <div className="field">
                    <input type="text" name="lastName" placeholder="Last Name"/>
                  </div>
                </div>
                <div className="field">
                  <label>Cellphone Number</label>
                  <input type="tel" name="number" maxlength="15" placeholder="Cellphone #"/>
                </div>
              </div>
            </form>
          </div>
          <div className="actions">
            <div className="ui red button" onClick={this.close.bind(this)}>Cancel</div>
            <div className="ui green button">Add</div>
          </div>
        </div>
    );
  }
}

export default AddContactModal;