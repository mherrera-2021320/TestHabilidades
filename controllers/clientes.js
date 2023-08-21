const { response, request } = require('express');

const Clientes = require('../models/clientes')


const getCliente = async (req = request, res = response) => {



    const listaClientes = await Promise.all([
        Clientes.countDocuments(),
        Clientes.find(),
    ]);

    res.json({
        msg: 'GET API de Clientes',
        listaClientes
    });

} 


const postClientes = async (req = request, res = response) => {

    const { nombre, dpi, direccion, correo, telefono, estado  } = req.body;
    const clientesDB = new Clientes({ nombre, dpi, direccion, correo, telefono, estado  });

    await clientesDB.save();

    res.json({
        msg: 'POST API de Clientes',
        clientesDB
    });

}

const putClientes = async (req = request, res = response) => {

    const { id } = req.params;
    
    const { _id, ...resto } = req.body;

    const clienteEditada = await Clientes.findByIdAndUpdate(id, resto,{new: true})


    res.status(200).json({
        msg: 'PUT API de Cliente',
        clienteEditada
    });

}

const deleteClientes = async (req = request, res = response) => {

    const { id } = req.params;
    const clienteEliminado = await Clientes.findByIdAndDelete(id)

    res.json({
        msg: 'DELETE API de clientes',
        clienteEliminado
    });

}

module.exports ={
    getCliente,
    postClientes,
    putClientes,
    deleteClientes
}
