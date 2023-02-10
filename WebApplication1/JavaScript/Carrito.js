    let $items = document.querySelector('#items');
    let total = 0.0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $mensaje = document.querySelector('#mensaje');
    let $zapatosComprados = [];
    let $contador = 0;

    let carrito;
    if (localStorage.carrito !== undefined)
        carrito = JSON.parse(localStorage.carrito);
    if (carrito === undefined)
        carrito = []
    else
    {
        renderizarCarrito(carrito);
        calcularTotal(carrito);
    }

    function success(data) {
        anyadirCarrito(data);
        localStorage.carrito = JSON.stringify(carrito);
    }

    function anyadirCarrito(dato) {
        carrito.push(dato);
        calcularTotal(carrito);
        renderizarCarrito(carrito);
    }

    function calcularTotal(carrito) {
        total = 0;
        for (let miItem of carrito) {
            total = total + parseFloat(miItem[0]['Precio']);
        }
        $total.textContent = total.toFixed(2);
        renderizarCarrito(carrito);
        console.log($carrito.type);
    }

    function renderizarCarrito(carrito) {
        $carrito.textContent = '';
        var indice = 0;
        var cantidad = 0;
        var zapatoActual = "";

        for (let miItem of carrito)
        {
            zapatoActual = `${miItem[0]['Nombre']}`;
            cantidad = 1;
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right');
            miNodo.textContent = `${zapatoActual} - ${miItem[0]['Precio']}€`
            miNodo.id = "li-principal" + zapatoActual;
            console.log()
            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.setAttribute('posicion', indice);
            miBoton.setAttribute('nombre', zapatoActual);
            miBoton.setAttribute('id', "boton"+zapatoActual);
            indice = indice + 1;
            miBoton.addEventListener('click', borrarItemCarrito);
            let nuevoNodo = document.createElement('li');
            nuevoNodo.classList.add('list-group-item', 'text-right');
            nuevoNodo.textContent = `Cantidad: ` + cantidad;
            nuevoNodo.setAttribute("id", zapatoActual);
            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
            $carrito.appendChild(nuevoNodo);
            $zapatosComprados.push(zapatoActual);
            console.log(document.getElementById("li-principal" + zapatoActual));
        }
    }

    function borrarItemCarrito() {
        carrito.splice(this.getAttribute('posicion'), 1);
        localStorage.removeItem("carrito");
        localStorage.carrito = JSON.stringify(carrito);
        renderizarCarrito(carrito);
        calcularTotal(carrito);
    }

    function comprar() {
        var uri = '@Url.Action("comprar", "Zapato")';
        var lineas = lineasFactura(carrito);
        $.ajax({
            url: uri,
            data: JSON.stringify(lineas),
            type: 'POST',
            success: exito,
            contentType: 'application/json'
        });
    }

    function exito(data) {
        $mensaje.textContent = data;
        localStorage.removeItem("carrito");
    }

    function lineasFactura(carrito)
    {
        var lineas = [];
        var lf = {};
        for (let miItem of carrito) {
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