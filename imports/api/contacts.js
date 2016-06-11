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
    var contact = Contacts.findOne(contactId);
    if (contact) {
      Contacts.remove(contact._id);
    } else {
      throw new Meteor.Error('Contact not found.');
    }
  },
  // Update a contact
  // @param {object} contact
  'contacts.update'(contact) {
    var storedContact = Contacts.findOne(contact._id);
    if (storedContact) {
      Contacts.update(contact._id, {
        $set: {
          firstName: contact.firstName,
          lastName: contact.lastName,
          phone: contact.phone,
          updatedAt: new Date()
        }
      });
    } else {
      throw new Meteor.Error('Contact not found.');
    }
  }
});