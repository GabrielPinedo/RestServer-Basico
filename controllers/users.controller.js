const {response} = require('express')


const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'Get Api - Controlador'
    })
}


const usuariosPost = (req, res = response) => {
    const body = req.body
    res.json({
        msg: "Post Controller",
        body
    })
}

const usuariosPut = (req, res = responde) => {
    
    const {id} = req.params;
    res.json({
        id
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}