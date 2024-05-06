import printProduct from '../utils/printProducts.js'

const BASE_URL = 'https://dummyjson.com'


async function getProducts() {
    // let arrayProductos = [];

    const productsFetch = await fetch(`${BASE_URL}/product`)
    const response = await productsFetch.json()
    const data = await response.products

    // console.log(data)
    // arrayProductos.push(data[3])    

    printProduct(data)
}

getProducts()



