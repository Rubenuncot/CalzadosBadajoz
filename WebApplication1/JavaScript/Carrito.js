    let $items = document.querySelector('#items');
    let total = 0.0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $mensaje = document.querySelector('#mensaje');
    let $zapatosComprados = [];
    let $contador = 0;

    let carro;
    if (localStorage.carrito !== undefined)
        carro = JSON.parse(localStorage.carrito);
    if (carro === undefined)
        carro = []
    else
    {
        renderizarCarrito(carro);
        calcularTotal(carro);
    }

    function calcularTotal(carro) {
        total = 0;
        for (let miItem of carro) {
            total = total + parseFloat(miItem[0]['Precio']);
        }
        $total.textContent = total.toFixed(2);
        renderizarCarrito(carro);
        console.log($carrito.type);
    }

    function renderizarCarrito(carro) {
        $carrito.textContent = '';
        var indice = 0;
        
        for (let miItem of carro) {
            console.log(parseInt(miItem[0].Cantidad));
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.setAttribute("id", "element-carrito")
            let miImagen = document.createElement('img');
            miImagen.src = miItem[0]['Imagen'];
            miImagen.style.width = '100px';
            let miProducto = document.createElement('span');
            miProducto.innerHTML = `${parseInt(miItem[0].Cantidad)} - ${miItem[0]['Nombre']} - ${parseInt(miItem[0]['Precio']) * parseInt(miItem[0].Cantidad)}€`;
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.setAttribute('posicion', indice);
            indice = indice + 1;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miImagen);
            miProducto.appendChild(miBoton);
            miNodo.appendChild(miProducto);

            miNodo.style.width = "100%";
            miNodo.style.display = 'flex';
            miNodo.style.alignItems = 'center';
            miNodo.style.justifyContent = 'space-between';
            $carrito.appendChild(miNodo);
        }
    }

    function borrarItemCarrito() {
        let posicion = this.getAttribute('posicion');
        carrito.splice(posicion, 1);
        localStorage.removeItem("carrito");
        localStorage.carrito = JSON.stringify(carrito);
        renderizarCarrito(carrito);
        calcularTotal(carrito);
        init();
    }

    function comprar() {
        if (carro.length > 0) {
            var uri = '/Zapato/comprar';
            var lineas = lineasFactura(carro);
            $.ajax({
                url: uri,
                data: JSON.stringify(lineas),
                type: 'POST',
                success: exito,
                contentType: 'application/json'
            });
        }
        localStorage.removeItem("carrito");
    }

    function exito(data) {
        $mensaje.textContent = data;
        localStorage.removeItem("carrito");
    }

    function lineasFactura(carro)
    {
        var lineas = [];
        var lf = {};
        for (let miItem of carro) {
            lf = {};
            lf.Zapato = miItem[0].CodZapato;
            lf.Cantidad = 1;
            lf.Total = miItem[0].Precio;
            lineas.push(lf);
        }
        return lineas;
}

    
/*
let t = 0.0;
let $carro = document.querySelector('#carro');
let $t = document.querySelector('#t');
let carro;
if (localStorage.carrito !== undefined)
    carro = JSON.parse(localStorage.carrito);
if (carro === undefined)
    carro = []
else {
    renderizarCarro(carro);
    calcularT(carro);
}




function renderizarCarro(carro) {
    $carro.textContent = '';
    var indice = 0;
    for (let miItem of carro) {
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right');
        miNodo.textContent = `${miItem[0]['Titulo']} - ${miItem[0]['Precio']}€`
        let miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.setAttribute('posicion', indice);
        indice = indice + 1;
        miBoton.addEventListener('click', borrarItemCarro);
        miNodo.appendChild(miBoton);
        $carro.appendChild(miNodo);
    }
}

function borrarItemCarro() {
    carro.splice(this.getAttribute('posicion'), 1);
    localStorage.removeItem("carrito");
    localStorage.carrito = JSON.stringify(carro);
    renderizarCarro(carro);
    calcularT(carro);
}
*/