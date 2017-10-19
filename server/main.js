import {Meteor} from 'meteor/meteor'
// noinspection ES6UnusedImports
import {Products} from '../imports/collections/products'

Meteor.startup(() => {
    Meteor.publish('users', function () {
        return Meteor.users.find({})
    })

    Meteor.methods({
        customDelete(_id) {
            if (!Meteor.isServer) return

            try {
                Meteor.users.remove({_id})
            } catch (e) {
                // handle this however you want
                throw new Meteor.Error('self-delete', 'Failed to remove yourself')
            }
        }
    })
    // code to run on server at startup
})
