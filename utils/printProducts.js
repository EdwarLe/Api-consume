const container = document.getElementById('container')

function printProduct(dataProducts) {

    let contenedorInfo = ''
    for(let i = 0; i < dataProducts.length ; i++) {
        if(i <= 10) {
            contenedorInfo += `<div>
                                        <h3>${dataProducts[i].title}</h3>
                                        <p>Stock: ${dataProducts[i].stock}</p>
                                        <p>Precio: $${dataProducts[i].price}</p>
                                        <p>Descripción: ${dataProducts[i].description}</p>
                                        <p>Categoría: ${dataProducts[i].category}</p>
                                        <div class='img-conatiner'>
                                            <img src='${dataProducts[i].images[0]}' alt='' />
                                        </div>
                                    </div>`
        }
    }
    container.innerHTML = contenedorInfo
}

export default printProduct