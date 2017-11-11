import {Meteor} from 'meteor/meteor'
// noinspection ES6UnusedImports
import {Orders} from '../imports/collections/orders'
// noinspection ES6UnusedImports
import {Products} from '../imports/collections/products'

Meteor.startup(() => {
    Meteor.publish('users', function () {
        return Meteor.users.find({})
    })

    Meteor.methods({
        'account.delete': function (_id) {
            if (Meteor.isServer) {
                try {
                    Meteor.users.remove({_id})
                } catch (e) {
                    throw new Meteor.Error('self-delete', 'Failed to remove yourself')
                }
            }
        },

        'account.setPassword': function (id, newPassword) {
            if (Meteor.isServer) {
                Accounts.setPassword(id, newPassword, e => {
                    if (!e) {
                        console.log('done!')
                    } else {
                        console.log(e)
                    }
                    this.close.bind(this)
                })
            }
        },

        'account.addRole': function (id, role) {
            Roles.addUsersToRoles(id, role)
        }
    })
    // code to run on server at startup
})
