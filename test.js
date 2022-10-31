const Contenedor = require('./manejoDeArchivos.js')

const products = new Contenedor('products.txt')

const test = async () => {
    let save = await products.save({
        title: 'Producto de prueba',
        price: '1234',
        thumbnail: 'http://sjkdnfkasdn'
    })
    let getAll = await products.getAll()
    let getById = await products.getById(3)
    let deleteById = await products.deleteById(2)
    let deleteAll = await products.deleteAll()

    console.log(save)
    console.log(getAll)
    console.log(getById)
    console.log(deleteById)
    //console.log(deleteAll)
}

test()