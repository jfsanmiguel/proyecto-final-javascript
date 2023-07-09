//variables
let cantidad1 = document.getElementById("cantidad1");
let cantidad2 = document.getElementById("cantidad2");
let cantidad3 = document.getElementById("cantidad3");
let cantidad4 = document.getElementById("cantidad4");
let idd = 0;
let ultimaCompra = 0;
let compra_pure = document.getElementById("boton__pure");
let compra_chips = document.getElementById("boton__manzana");
let compra_zanahoria = document.getElementById("boton__zanahoria");
let compra_mix = document.getElementById("boton__legumbre");
let check_pu = document.getElementById("flexRadiopu");
let check_pm = document.getElementById("flexRadiopm");
let check_cu = document.getElementById("flexRadiocu");
let check_cm = document.getElementById("flexRadiocm");
let check_zu = document.getElementById("flexRadiozu");
let check_zm = document.getElementById("flexRadiozm");
let check_lu = document.getElementById("flexRadiolu");
let check_lm = document.getElementById("flexRadiolm");
//arrays
const productos = [];
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let subtotal = localStorage.getItem("subtotal") || 0;
//objetos
function producto(id, nombre, precioUnitario, precioMayor, cantUnitaria, cantMayor, cantCompra, tipo, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precioUnitario = precioUnitario;
    this.precioMayor = precioMayor;
    this.cantUnitaria = cantUnitaria;
    this.cantMayor = cantMayor;
    this.cantCompra = cantCompra;
    this.tipo = tipo
    this.imagen = imagen;

}
function valor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
}
const pureVerdura = new producto(idd, "Pure de verduras", 15, 45, 10, 100, 0, false, "https://res.cloudinary.com/dodvy1su7/image/upload/v1683428894/ProyectoFreshFood/top-view-of-veggie-puree-photo_lti3ce.jpg");
productos.push(pureVerdura);
const chipsManzana = new producto(idd, "Chips de manzana", 10, 30, 10, 50, 0, false, "https://res.cloudinary.com/dodvy1su7/image/upload/v1683428894/ProyectoFreshFood/recipe_bakedapplechips_fb_jvupdc.jpg");
productos.push(chipsManzana);
const zanahorias = new producto(idd, "Snack de zanahorias", 12, 36, 15, 125, 0, false, "https://res.cloudinary.com/dodvy1su7/image/upload/v1683428894/ProyectoFreshFood/chips_de_zanahoria_al_horno_61512_orig_do3cpp.jpg");
productos.push(zanahorias);
const legumbresPlatano = new producto(idd, "Mix de legumbres y platano", 20, 60, 20, 75, 0, false, "https://res.cloudinary.com/dodvy1su7/image/upload/v1683428894/ProyectoFreshFood/tiendas-en-linea-snacks-saludables_apoewi.jpg");
productos.push(legumbresPlatano);

//funciones
const operacion = (op) => {
    if (op == "sumar") {
        return (a, b) => a + b;
    }
    else if (op == "restar") {
        return (a, b) => a - b;
    }
    else if (op == "multiplicar") {
        return (a, b) => a * b;
    }
}
let sumar = operacion("sumar");
let restar = operacion("restar");
let multiplicar = operacion("multiplicar");
const recorrercarrito = (arr1, arr2, fn) => {
    for (let i = 0; i < arr1.length; i++) {
        fn("Producto:");
        fn(arr1[i]);
        fn("Valor");
        fn(arr2[i]);
    }

}

//tienda
const comprap = document.querySelector("#boton__pure");
const comprac = document.querySelector("#boton__manzana");
const compraz = document.querySelector("#boton__zanahoria");
const compral = document.querySelector("#boton__legumbre");
const button = document.querySelector("#buttonCarro");
comprap.addEventListener("click", () => {
    if (check_pu.checked && cantidad1.value <= pureVerdura.cantUnitaria) {
        pureVerdura.cantCompra = multiplicar(cantidad1.value, pureVerdura.precioUnitario);
        pureVerdura.id++;
        carrito.push(pureVerdura);
        subtotal = subtotal + multiplicar(cantidad1.value, pureVerdura.precioUnitario);
        console.log("compra de " + pureVerdura.cantCompra);
    } else if (check_pm.checked && cantidad1.value <= pureVerdura.cantMayor) {
        pureVerdura.cantCompra = multiplicar(cantidad1.value, pureVerdura.precioMayor);
        pureVerdura.id++;
        carrito.push(pureVerdura);
        subtotal = subtotal + multiplicar(cantidad1.value, pureVerdura.cantCompra);
        console.log("compra de " + pureVerdura.cantCompra);
    }
    else if (cantidad1.value > pureVerdura.cantUnitaria || cantidad1.value > pureVerdura.cantMayor) {
        alert("la cantidad ingresada supera la disponibilidad del producto");
    }
    else if (!check_pu.checked && !check_pm.checked) {
        alert("Seleccione un tipo de compra");
    }
})
comprac.addEventListener("click", () => {
    if (check_cu.checked && cantidad2.value <= chipsManzana.cantUnitaria) {
        chipsManzana.cantCompra = multiplicar(cantidad2.value, chipsManzana.precioUnitario);
        chipsManzana.id++;
        carrito.push(chipsManzana);
        subtotal = subtotal + multiplicar(cantidad2.value, chipsManzana.precioUnitario);
        console.log("compra de " + chipsManzana.cantCompra);
    } else if (check_cm.checked && cantidad2.value <= chipsManzana.cantMayor) {
        chipsManzana.cantCompra = multiplicar(cantidad2.value, chipsManzana.precioMayor);
        chipsManzana.id++;
        carrito.push(chipsManzana);
        subtotal = subtotal + multiplicar(cantidad2.value, chipsManzana.cantCompra);
        console.log("compra de " + chipsManzana.cantCompra);
    }
    else if (cantidad2.value > chipsManzana.cantUnitaria || cantidad2.value > chipsManzana.cantMayor) {
        alert("la cantidad ingresada supera la disponibilidad del producto");
    }
    else if (!check_cu.checked && !check_cm.checked) {
        alert("Seleccione un tipo de compra");
    }
})
compraz.addEventListener("click", () => {
    if (check_zu.checked && cantidad3.value <= zanahorias.cantUnitaria) {
        zanahorias.cantCompra = multiplicar(cantidad3.value, zanahorias.precioUnitario);
        zanahorias.id++;
        carrito.push(zanahorias);
        subtotal = subtotal + multiplicar(cantidad3.value, zanahorias.precioUnitario);
        console.log("compra de " + zanahorias.cantCompra);
    } else if (check_zm.checked && cantidad3.value <= zanahorias.cantMayor) {
        zanahorias.cantCompra = multiplicar(cantidad3.value, zanahorias.precioMayor);
        zanahorias.id++;
        carrito.push(zanahorias);
        subtotal = subtotal + multiplicar(cantidad3.value, zanahorias.cantCompra);
        console.log("compra de " + zanahorias.cantCompra);
    }
    else if (cantidad3.value > zanahorias.cantUnitaria || cantidad3.value > zanahorias.cantMayor) {
        alert("la cantidad ingresada supera la disponibilidad del producto");
    }
    else if (!check_zu.checked && !check_zm.checked) {
        alert("Seleccione un tipo de compra");
    }
})
compral.addEventListener("click", () => {
    if (check_lu.checked && cantidad4.value <= legumbresPlatano.cantUnitaria) {
        legumbresPlatano.cantCompra = multiplicar(cantidad4.value, legumbresPlatano.precioUnitario);
        legumbresPlatano.id++;
        carrito.push(legumbresPlatano);
        subtotal = subtotal + multiplicar(cantidad4.value, legumbresPlatano.precioUnitario);
        console.log("compra de " + legumbresPlatano.cantCompra);
    } else if (check_lm.checked && cantidad4.value <= legumbresPlatano.cantMayor) {
        legumbresPlatano.cantCompra = multiplicar(cantidad4.value, legumbresPlatano.precioMayor);
        legumbresPlatano.id++;
        carrito.push(legumbresPlatano);
        subtotal = subtotal + multiplicar(cantidad4.value, legumbresPlatano.cantCompra);
        console.log("compra de " + legumbresPlatano.cantCompra);
    }
    else if (cantidad4.value > legumbresPlatano.cantUnitaria || cantidad4.value > legumbresPlatano.cantMayor) {
        alert("la cantidad ingresada supera la disponibilidad del producto");
    }
    else if (!check_lu.checked && !check_lm.checked) {
        alert("Seleccione un tipo de compra");
    }
})
button.addEventListener("click", () => {
    carrito.forEach(elemento => {
        localStorage.setItem("carrito", JSON.stringify(carrito));

    });
    localStorage.setItem("subtotal", subtotal);
    const carro = document.querySelector("#compra");
    carro.innerHTML = `<h2>Subtotal compra: $ ${subtotal} USD</h2>`;
    carrito.forEach(elemento => {
        const compra = document.createElement("div");
        compra.classList.add("compra");
        compra.innerHTML = `
                          <div><img class="compra_imagen" src=${elemento.imagen} alt=""/></div>
                           <div class="compra_informacion">
                                <span class="compra_nombre">Nombre producto: ${elemento.nombre}</span>
                                <span class="compra_precioUnitario">Precio Compra: $ ${elemento.cantCompra} USD</span>
                                
                                
                             </div>
         `
        const buttonPagar = document.createElement("button");
        buttonPagar.innerText = "Pagar"
        buttonPagar.addEventListener("click", () => {
            alert("compra realizada");
            carrito = [];
            localStorage.removeItem("carrito");
        })
        compra.appendChild(buttonPagar);
        carro.appendChild(compra);

    })

})








