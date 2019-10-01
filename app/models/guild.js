const { Schema, model } = require('mongoose')

const GuildSchema = new Schema({
    serverId: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    guildMember: {
        join: {
            publicMessage: {
                bool: Boolean,
                channel: String
            },
            privateMessage: {
                bool: Boolean,
                content: String
            },
            giveRoles: {
                bool: Boolean,
                roles: []
            }
        },
        leave: {
            publicMessage: {
                bool: Boolean,
                channel: String
            }
        }
    },
    commands: [{
        name: {
            type: String,
        },
        description: {
            type: String
        },
        action: {
            type: String
        }
    }]
}, {
    timestamps: true
})

module.exports = model('GuildSchema', GuildSchema)

