import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="app">
          <h3 className="ui center aligned header">Contacts
            <div className="ui green label">Add</div>
          </h3>

          <div className="ui text container">
            <div className="ui segments">
              <div className="ui segment">John Doe</div>
              <div className="ui segment">Micasa S. Sucasa</div>
              <div className="ui segment">Chuck Norris</div>
              <div className="ui segment">Bruce Lee</div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;