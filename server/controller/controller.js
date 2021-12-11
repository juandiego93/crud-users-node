var methods = require("../model/model")
var UserDb = methods.UserDb

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Content can not be empty.' })
        return
    }
    console.log(req.body)

    const user = new UserDb({

        typeDocument: req.body.typeDocument,
        document: req.body.document,
        name: req.body.name,
        lastname: req.body.lastname,
        document: req.body.document,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        area: req.body.area,
        subarea: req.body.subarea,
    })

    user.save(user)
        .then((data) => {
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error ocurred while creating user'
            })
        })

}

exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        UserDb.findById(id)
            .then(user => {
                if (!user) {
                    res.status(404).send({ message: 'User not found with id ' + id });
                } else {
                    res.send(user)
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Error ocurred while retriving user with id ' + id
                })
            })
    } else {
        UserDb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Some error ocurred while retriving user info'
                })
            })
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Data to update can not be empty.' })
        return
    }

    const id = req.params.id
    console.log(id);
    UserDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(400).send({ message: 'Cannot update qith user '.concat(id) })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error ocurred while update user info'
            })
        })

}

exports.delete = (req, res) => {
    const id = req.params.id
    UserDb.findByIdAndDelete(id)
        .then((data) => {
            if (!data) {
                res.status(404).send({ message: 'Cannot Delete user with id'.concat(id) })
            }
            else {
                res.send({
                    message: 'User was deleted successfully!'
                })
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error ocurred while delete user'
            })
        })

}

exports.typeDocuments = (req, res) => {

}
exports.areas = (req, res) => { }
exports.subareas = (req, res) => { }