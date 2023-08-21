const {Router} = require('express');
const {getCliente, postClientes, putClientes, deleteClientes } = require('../controllers/clientes')

const router = Router();

router.get('/ver', getCliente);

router.post('/agregar', postClientes);

router.put('/editar/:id', putClientes);

router.delete('/eliminar/:id', deleteClientes);



module.exports = router; 