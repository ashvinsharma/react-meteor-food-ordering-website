import {Mongo} from 'meteor/mongo'

Meteor.methods({
    'products.insert': function (product) {
        return Products.insert(product)
    },

    'products.remove': function (product) {
        return Products.remove(product)
    },

    'products.update': function (product, key, value) {
        return Products.update(product._id, {$set: {[key]: value}})
    }
})

export const Products = new Mongo.Collection('products')
