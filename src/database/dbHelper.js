/* eslint-disable no-console */
/**
 * Database helper
 * ATM everything will be here
 */
// IMPORTS
const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const typeorm = require('typeorm');

const dbName = '/srce.db';
const pathToDatabase = path.join(__dirname, dbName);

// Entitys
const Person = require('./entity/Person').Person;
const Call = require('./entity/Call').Call;

function checkIfDatabaseExists() {
    fs.access(pathToDatabase, fs.F_OK, e => {
        if (e) {
            module.exports.CreateDatabase();
        } else {
            console.log('Already created');
        }
    });
}

exports.databaseAutomation = () => {
    checkIfDatabaseExists();
    this.ConnectToDb();
};

exports.CreateDatabase = () => {
    // eslint-disable-next-line no-unused-vars
    const db = new sqlite3.Database(pathToDatabase, e => {
        if (e) {
            console.error(e.message);
        } else {
            console.log('Created new db!');
        }
    });
};

exports.DeleteDatabase = () => {
    fs.unlink(pathToDatabase, e => {
        if (e) {
            console.log(e.message);
            return;
        }
        console.log(`Database removed: ${pathToDatabase}`);
    });
};

exports.ConnectToDb = () => {
    typeorm
        .createConnection()
        .then(() => {
            console.log('connected');
        })
        .catch(e => {
            console.log(e);
        });
};

async function saveToDb(entity, data) {
    const repo = typeorm.getRepository(entity);

    try {
        await repo.save(data);
    } catch (error) {
        console.log(error);
    }
}

exports.addPersonToDb = () => {
    const person = new Person(0, 'djordje', 'Ljubicic');
    saveToDb('Person', person);
};

exports.addCallToDb = () => {
    const call = new Call('1', '1875-08-12', 'Utorakssss', '11:08:36', '134', 'lorem', '1', '3', 'ipsum', 'dhbshv dhgbh ghgd efg', 'hegbehw ehfi hh ihifuh whf uiuregh iwug iu huh riu giue hui gerugerguy');
    saveToDb('Call', call);
};

