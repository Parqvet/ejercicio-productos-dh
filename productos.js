const fs = require('fs');

const moduloProductos = {

    archivo: './productos.json',
    readJson: function() {
        let listaProductos = fs.readFileSync(this.archivo);
        let productosParser = JSON.parse(listaProductos);
        return productosParser;
    },
    writeJson: function(id, producto, precio) {

        let newProduct = {
            id,
            producto,
            precio
        }

        let lista = this.leerJson();
        lista.push(newProduct);

        let newJson = JSON.stringify(lista);
        fs.writeFileSync(this.archivo, newJson, 'utf-8');
    },
    

}

module.exports = moduloProductos;