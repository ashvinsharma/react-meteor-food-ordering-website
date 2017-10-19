import {Mongo} from 'meteor/mongo'

Meteor.methods({
    'orders.insert': function (order) {
        return Orders.insert(order)
    },

    'orders.remove': function (order) {
        return Orders.remove(order)
    },

    'orders.update': function (order, key, value) {
        return Orders.update(order._id, {$set: {[key]: value}})
    }
})

export const Orders = new Mongo.Collection('orders')
