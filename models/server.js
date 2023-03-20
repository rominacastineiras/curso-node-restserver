const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath  = '/api/usuarios'

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicación

        this.routes();
    }

    middlewares(){
        //CORS: Para poder limitar accesos, por ejemplo desde donde se hacen los pedidos
        this.app.use(cors());
        
        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio Público
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));       
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }
}

module.exports = Server;