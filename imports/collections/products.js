import {Mongo} from 'meteor/mongo'

Meteor.methods({
    'products.insert': function (product) {
        return Products.insert(product)
    },

    'products.remove': function (product) {
        return Products.remove(product)
    }
})

export const Products = new Mongo.Collection('products')
