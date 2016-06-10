import { Mongo } from 'meteor/mongo';

export const Contacts = new Mongo.Collection('contacts');

if (Meteor.isServer) {
  Meteor.publish('contacts', function tasksPublication() {
    return Contacts.find();
  });
}