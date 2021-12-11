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
    resp.render('add_user')
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