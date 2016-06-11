import React, { Component } from 'react';

/**
 * Contact view component
 *
 * @author jet.oneza
 */
class Contact extends Component {

  _remove() {
    let {contact} = this.props;
    if (confirm(`Are you sure to delete ${contact.firstName}?`)) {
      Meteor.call('contacts.remove', contact._id);
    }
  }

  render() {
    const {contact} = this.props;

    const phone = contact.phone ? (
        <div className="ui green label">{contact.phone}</div>
    ) : null;

    return (
        <tr className="contact">
          <td>
            <div className="header">{contact.firstName} {contact.lastName}</div>
            {phone}
          </td>
          <td className="right aligned">
            <button className="ui green icon button"
                    onClick={() => {this.props.handleEditClick(contact)}}>
              <i className="write icon"></i>
            </button>
            <button className="ui red icon button" onClick={this._remove.bind(this)}>
              <i className="remove icon"></i>
            </button>
          </td>
        </tr>
    );
  }
}

export default Contact;