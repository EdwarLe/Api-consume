const container = document.getElementById('container')

function printProduct(dataProducts) {

    let contenedorInfo = ''
    for(let i = 0; i < dataProducts.length ; i++) {
        if(i <= 11) {
            contenedorInfo += `<div class='container-cel'>
                                <div class='container-info'>
                                    <h3>${dataProducts[i].title}</h3>
                                    <div>
                                        <span>Stock: ${dataProducts[i].stock}</span>
                                        <span>Precio: $${dataProducts[i].price}</span>
                                    </div>
                                    <p>Descripción: ${dataProducts[i].description}</p>
                                    <p>Categoría: ${dataProducts[i].category}</p>
                                </div>
                                        <div class='img-conatiner'>
                                            <img src='${dataProducts[i].images[0]}' alt='' />
                                        </div>
                                    </div>`
        }
    }
    container.innerHTML = contenedorInfo
}

export default printProduct