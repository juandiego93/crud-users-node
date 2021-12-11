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

exports.add_user = async (req, resp) => {

    const getDataTypeDocuments = async () => {
        const { data } = await axios.get("http://localhost:3000/api/typeDocuments");
        return data
    }

    const getDataAreas = async () => {
        const { data } = await axios.get("http://localhost:3000/api/areas");
        return data
    }

    const getDataSubAreas = async () => {
        const { data } = await axios.get("http://localhost:3000/api/subareas");
        return data
    }

    resp.render('add_user', {
        typeDocument: await getDataTypeDocuments(),
        areas: await getDataAreas(),
        subareas: await getDataSubAreas(),
    })
}

exports.update_user = async (req, resp) => {

    const getDataTypeDocuments = async () => {
        const { data } = await axios.get("http://localhost:3000/api/typeDocuments");
        return data
    }

    const getDataAreas = async () => {
        const { data } = await axios.get("http://localhost:3000/api/areas");
        return data
    }

    const getDataSubAreas = async () => {
        const { data } = await axios.get("http://localhost:3000/api/subareas");
        return data
    }

    const getDataUserById = async () => {
        const { data } = await axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } })
        return data
    }

    resp.render('update_user', {
        user: await getDataUserById(),
        typeDocument: await getDataTypeDocuments(),
        areas: await getDataAreas(),
        subareas: await getDataSubAreas(),
    })
}