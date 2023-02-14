function init() {
    let $numElementosCarrito = document.querySelector("#numElementsCarrito");

    let carrito;
    if (localStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }

    if (carrito === undefined || carrito.length === 0) {
        carrito = [];
        $numElementosCarrito.textContent = 0;
    } else {
        let suma = carrito.reduce((total, elemento) => total + elemento[0].Cantidad, 0);
        $numElementosCarrito.textContent = suma;
    }
    console.log(carrito)
}