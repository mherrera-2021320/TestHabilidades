const { Schema, model } = require('mongoose');


const ClienteSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'Ingresar Nombre completo, es obligatorio'],
    },

    dpi: {
        type: Number,
        required: [true, 'El dpi es obligatorio']
    },

    direccion: {
        type: String,
        required: [true, 'La direccion es obligatorio']
    },

    correo: {
        type: String,
        required: [true, 'El correo es obligatorio']
    },

    telefono: {
        type: Number,
        required: [true, 'El numerno telefonico es obligatorio']
    },

    estado: {
        type: String,
        required: [true,'Solamente puede ser Activo o Inactivo'],
        emun: ['Activo', 'Inactivo']
    },

    estadoCliente: {
        type: Boolean,
        default: true
    },

});

module.exports = model('Cliente', ClienteSchema)