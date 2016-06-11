import React, { Component } from 'react';

/**
 * Menu wrapper component
 *
 * @author jet.oneza
 */
class MenuWrapper extends Component {

  render() {
    return (
        <div className="menu-wrapper">
          <h2 className="ui center aligned header">SMS</h2>

          <div className="ui two column stackable grid text container">
            <div className="column">
              <a href="/create-message" className="fluid large ui basic red button">
                <i className="icon edit"></i>
                Create Message
              </a>
            </div>
            <div className="column">
              <a href="/contacts" className="fluid large ui basic green button">
                <i className="icon users"></i>
                Contacts
              </a>
            </div>
          </div>
        </div>
    );
  }
}

export default MenuWrapper;