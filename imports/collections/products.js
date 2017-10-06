import {Mongo} from 'meteor/mongo'

Meteor.methods({
    'products.insert': function (obj) {
        return Products.insert(obj)
    }
})

export const Products = new Mongo.Collection('products')
