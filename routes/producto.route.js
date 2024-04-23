
const router = require('express').Router();
const productoController = require('./producto.controller'); // Importar controlador

// Ruta para obtener una lista de productos
router.get('/productos', productoController.listarProductos);

module.exports = router;
