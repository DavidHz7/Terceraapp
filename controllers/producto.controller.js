const {response, request} = require('express');



const Producto = require('../models/producto.model'); // Importar modelo de producto

// Controlador para obtener una lista de productos
exports.listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // Buscar todos los productos
    res.status(200).json(productos); // Enviar respuesta con la lista de productos
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener productos'); // Manejar error
  }
};



