import React from 'react';
import {mount} from 'react-mounter';

import {App} from '../imports/ui/App.jsx';

import ContactsWrapper from '../imports/ui/contacts/ContactsWrapper.jsx';
import MenuWrapper from '../imports/ui/menu/MenuWrapper.jsx';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: (<MenuWrapper />)
    })
  }
});

FlowRouter.route('/contacts', {
  action() {
    mount(App, {
      content: (<ContactsWrapper />)
    })
  }
});

