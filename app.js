const moduloProductos = require('./productos');

const process = require('process');
const comando = process.argv[2];

switch (comando) {
    case 'listar':

        let products = moduloProductos.leerJson();

        console.log('------------------')
        console.log("Lista de productos");
        console.log('------------------'); 

        products.map(product => console.log(`ID: ${product.id} -- Producto: ${product.name} -- Precio: ${product.price}`));
    
        break;

    case 'agregar':

        let id =    parseInt (process.argv[3]);
        let product =  process.argv[4];
        let price = parseInt(process.argv[5]);

        if (!id || !product || !price) {
            console.log("Tenes que agregar todos los campos");
        } else {
            moduloProductos.escribirJson(id, product, price);
            console.log("Producto añadido");
        }

        break;
    case 'filtrar':
        break;
    case 'cambiarPrecio':
        break;
    case 'buscar':
        break;
    case 'eliminar':

}