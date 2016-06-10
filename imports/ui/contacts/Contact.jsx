import React, { Component } from 'react';

class Contact extends Component {
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
            <button className="ui green icon button">
              <i className="write icon"></i>
            </button>
            <button className="ui red icon button">
              <i className="remove icon"></i>
            </button>
          </td>
        </tr>
    );
  }
}

export default Contact;