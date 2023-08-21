const express = require ('express');
const cors = require('cors');
const { dbConection } = require('../database/config');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            categoria: '/api/categoria',
            cliente: '/api/clientes'
        }

    
        this.conectarDB();
        this.middlewares();
        this.routes();

    }


    async conectarDB(){
        await dbConection();
    }

    
    middlewares(){

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use(  express.static('public') );

    }


    routes(){
        this.app.use( this.paths.categoria, require('../routes/categoria') );
        this.app.use( this.paths.cliente, require('../routes/cliente'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto localhost ${this.port}`)
        })
    }


}



module.exports = Server;