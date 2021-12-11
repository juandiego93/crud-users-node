const { compileQueryParser } = require('express/lib/utils');
const mongoose = require('mongoose');
var P = mongoose.Promise = require('bluebird');

//Init Types documents
var TypeDocuments = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    }
})
const typeDocument = mongoose.model('typeDocument', TypeDocuments)

var arrayDataTypeDocuments = [
    { name: 'Cedula de Ciudadania' },
    { name: 'Tarjeta de Identidad' },
    { name: 'Cedula de extranjeria' },
]

P.all(arrayDataTypeDocuments.map((i) => new typeDocument(i).save()))
    .then((data) => console.log('Data: '.concat(data)))
    .catch((err) => console.log('Error '.concat(err)))
    .finally(process.exit)

//Finish Types documents

//Init Areas
var Areas = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    }
})

const areas = mongoose.model('areas', Areas)

var arrayDataAreas = [
    { name: 'Administracion' },
    { name: 'Logistica' },
    { name: 'Gerencia' },
    { name: 'Investigacion' },
]

P.all(arrayDataAreas.map((i) => new areas(i).save()))
    .then((data) => console.log('Data: '.concat(data)))
    .catch((err) => console.log('Error '.concat(err)))
    .finally(process.exit)

//Finish Areas

//Init SubAreas
var SubAreas = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    }
})
const subareas = mongoose.model('subareas', SubAreas)

var arrayDataSubAreas = [
    { name: 'A1' },
    { name: 'A2' },
    { name: 'A3' },
    { name: 'L1' },
    { name: 'L2' },
    { name: 'L3' },
    { name: 'G1' },
    { name: 'G2' },
    { name: 'G3' },
    { name: 'I1' },
    { name: 'I2' },
    { name: 'I3' },
]

P.all(arrayDataSubAreas.map((i) => new subareas(i).save()))
    .then((data) => console.log('Data: '.concat(data)))
    .catch((err) => console.log('Error '.concat(err)))
    .finally(process.exit)

//Finish SubAreas


var schema = new mongoose.Schema({
    typeDocument: {
        type: mongoose.Schema.Types.ObjectId, ref: 'typeDocument',
        required: true,
    },
    document: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    gender: String,
    status: String,
    area: {
        type: mongoose.Schema.Types.ObjectId, ref: 'areas',
        required: true,
    },
    subarea: {
        type: mongoose.Schema.Types.ObjectId, ref: 'subareas',
        required: true,
    },
})

const UserDb = mongoose.model('userdb', schema)

module.exports = { 'UserDb': UserDb, 'typeDocument': typeDocument, 'areas': areas, 'subareas': subareas }