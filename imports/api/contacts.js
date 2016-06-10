import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

/**
 * Contacts API
 *
 * @type {Mongo.Collection}
 * @author jet.oneza
 */
export const Contacts = new Mongo.Collection('contacts');

if (Meteor.isServer) {
  Meteor.publish('contacts', function tasksPublication() {
    return Contacts.find();
  });
}

/**
 * Contacts Actions
 */
Meteor.methods({
  // Insert a contact
  // @param {object} data
  'contacts.insert'(data) {
    let {firstName, lastName, phone} = data;

    check(firstName, String);
    check(lastName, String);
    check(phone, String);

    Contacts.insert({
      firstName,
      lastName,
      phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
  // Remove a contact
  // @param {string} contactId
  'contacts.remove'(contactId) {
    const contact = Contacts.findOne(contactId);
    if (contact) {
      Contacts.remove(contact._id);
    } else {
      throw new Meteor.Error('Contact not found.');
    }
  },
});