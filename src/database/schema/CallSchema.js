const EntitySchema = require('typeorm').EntitySchema;
const Call = require('../entity/Call').Call;

module.exports = new EntitySchema({
    name: 'Call',
    target: Call,
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        dateOfCall: {
            type: 'date'
        },
        day: {
            type: 'varchar',
            length: 50
        },
        timeOfCall: {
            type: 'time'
        },
        callDuration: {
            type: 'varchar',
            length: 50
        },
        personName: {
            type: 'varchar',
            length: 100
        },
        typeOfContact: {
            type: 'varchar',
            length: 50
        },
        volunteer: {
            type: 'varchar',
            length: 50
        },
        shortDescription: {
            type: 'text',
            length: 350
        },
        note: {
            type: 'varchar',
            length: 150
        }
    }
});
