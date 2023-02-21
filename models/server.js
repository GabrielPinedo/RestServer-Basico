const express = require('express');
var cors = require('cors');


class Server{
    constructor(){
        this.app =express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users'
        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
        

    }
    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servdor ejecutado en el puerto: ', this.port)
        })
    }

    middlewares(){
        this.app.use(express.static('public'))
        this.app.use(cors());
        this.app.use(express.json());
    }   
}

module.exports = Server