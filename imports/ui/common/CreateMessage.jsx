import React, { Component } from 'react';

/**
 * Create message component
 *
 * @author jet.oneza
 */
class CreateMessage extends Component {

  render() {
    return (
        <div className="ui text container create-message">
          <h2 className="ui center aligned header">Create Message</h2>

          <div className="ui form">
            <div className="field">
              <label>Cellphone Number:</label>
              <input ref="phone" type="tel" name="phone" maxlength="15"
                     placeholder="Cellphone #"/>
            </div>
            <div className="field">
              <label>Message:</label>
              <textarea></textarea>
            </div>
            <div className="field">
              <div className="characters">200 characters left.</div>
            </div>
            <div className="ui green button">Send
            </div>
          </div>
        </div>
    );
  }
}

export default CreateMessage;