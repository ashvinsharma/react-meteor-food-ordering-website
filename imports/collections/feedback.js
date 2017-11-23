import {Mongo} from 'meteor/mongo'

Meteor.methods({
    'feedbacks.insert': function (feedback) {
        return Feedbacks.insert(feedback)
    },

    'feedbacks.remove': function (feedback) {
        return Feedbacks.remove(feedback)
    },

    'feedbacks.update': function (feedback, key, value) {
        return Feedbacks.update(feedback._id, {$set: {[key]: value}})
    }
})

export const Feedbacks = new Mongo.Collection('feedbacks')
