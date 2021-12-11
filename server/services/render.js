const axios = require('axios');

exports.homeRoutes = (req, resp) => {
    axios.get('http://localhost:3000/api/users')
        .then(response => {
            resp.render('index', { users: response.data })
        })
        .catch(err => {
            res.send(err);
        });
}

exports.add_user = (req, resp) => {

    var typeDocument = []
    var areas = []
    var subareas = []

    axios.get('http://localhost:3000/api/typeDocuments')
        .then(response => {
            typeDocument = response.data
        })
        .catch(err => {
            res.send(err);
        });

    axios.get('http://localhost:3000/api/areas')
        .then(response => {
            areas = response.data
        })
        .catch(err => {
            res.send(err);
        });

    axios.get('http://localhost:3000/api/subareas')
        .then(response => {
            subareas = response.data
        })
        .catch(err => {
            res.send(err);
        });

    resp.render('add_user', {
        typeDocument: typeDocument,
        areas: areas,
        subareas: subareas,
    })
}

exports.update_user = (req, resp) => {
    axios.get('http://localhost:3000/api/users',
        {
            params:
            {
                id: req.query.id
            }
        })
        .then(response => {
            resp.render('update_user', { user: response.data })
        })
        .catch(err => {
            resp.send(err);
        });
}