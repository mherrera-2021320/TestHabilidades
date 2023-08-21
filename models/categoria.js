const { Schema, model } = require('mongoose');


const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    proveedor: {
        type: String,
        required: [true, 'El Suministrador es obligatorio'],
    },

    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatorio']
    },

    seccion: {
        type: String,
        required: true,
        emun: ['Ligero', 'Medio', 'Pesado', 'Fragil']
    },

    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Categoria', CategoriaSchema)