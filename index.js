//variables
let opcion = 0;
let total = 0;
let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;
let cantidad4 = 0;
let cantidad = 0;
let pedido1 = 0;
let pedido2 = 0;
let pedido3 = 0;
let pedido4 = 0;
let pedidos = 0;
let pregunta = 1;
let eliminar =0;
let buscar=0;
let ultimaCompra=0;
const impuestos=0.19;
//estado boolean para conocer si se realizan pedidos al por mayor
let estado = false;
//objetos
function producto(nombre,precioUnitario,precioMayor,cantUnitaria,cantMayor){
    this.nombre=nombre;
    this.precioUnitario=precioUnitario;
    this.precioMayor=precioMayor;
    this.cantUnitaria=cantUnitaria;
    this.cantMayor=cantMayor;

}
function valor(nombre,valor){
    this.nombre=nombre;
    this.valor=valor;
}
const pureVerdura=new producto("Pure de verduras",15,45,10,100);
const chipsManzana=new producto("Chips de manzana",10,30,10,50);
const zanahorias=new producto("Snack de zanahorias",12,36,15,125);
const legumbresPlatano= new producto("Mix de legumbres y platano",20,60,20,75);
//arrays
const carrito=[];
const subtotal=[];
//funciones
const operacion=(op)=>{
    if(op=="sumar"){
        return(a,b)=>a+b;
    }
    else if(op=="restar"){
        return(a,b)=>a-b;
    }
    else if(op=="multiplicar"){
        return(a,b)=>a*b;
    }
}
let sumar=operacion("sumar");
let restar=operacion("restar");
let multiplicar=operacion("multiplicar");
const recorrercarrito=(arr1,arr2,fn)=>{
    for(let i=0;i<arr1.length;i++){
        fn("Producto:");
        fn(arr1[i]);
        fn("Valor");
        fn(arr2[i]);
    }

}
//simulador compras

while (opcion != 9) {
    opcion = parseInt(prompt("ingrese numero de 0 a 9 para realizar acción: 0-bienvenida , 1-comprar pure de verdura, 2-comprar chips de manzana, 3-comprar zanahoria, 4-comprar legumbres, 5-calcular impuestos, 6-buscar producto, 7-eliminar útlima compra,8-pagar, 9-salir menu"));
    switch (opcion) {
        case 0:
            console.log("Hola bienvenido/a a FreshDia");
            break;
        case 1:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad1 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad1 <= pureVerdura.cantUnitaria && cantidad1 >= 0) {
                    ultimaCompra=multiplicar(cantidad1, pureVerdura.precioUnitario)
                    total = sumar(total,ultimaCompra);
                    cantidad = sumar(cantidad, cantidad1);
                    subtotal.push(new valor("compra unitaria de pure de verduras",ultimaCompra));
                    carrito.push(pureVerdura);
                    alert("Se agregaron "+cantidad1+" unidades con valor de "+ multiplicar(cantidad1,pureVerdura.precioUnitario)+"$");
                } else if (cantidad1 > pureVerdura.cantUnitaria) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido1 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido1 <= pureVerdura.cantMayor && pedido1 >= 0) {
                    ultimaCompra=multiplicar(pedido1, pureVerdura.precioMayor)
                    total = sumar(total, ultimaCompra);
                    pedidos = sumar(pedidos, pedido1);
                    subtotal.push(new valor("compra al por mayor de pure de verduras",ultimaCompra));
                    carrito.push(pureVerdura);
                    alert("Se añadió un pedido de "+pedido1+" kg por valor de "+multiplicar(pedido1,pureVerdura.precioMayor)+"$");
                } else if (pedido1 > pureVerdura.cantMayor) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 2:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad2 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad2 <= chipsManzana.cantUnitaria && cantidad2 >= 0) {
                    ultimaCompra=multiplicar(cantidad2, chipsManzana.precioUnitario)
                    total = sumar(total, ultimaCompra);
                    cantidad = sumar(cantidad, cantidad2);
                    subtotal.push(new valor("compra unitaria de pure de chips de manzana",ultimaCompra));
                    carrito.push(chipsManzana);
                    alert("Se agregaron "+cantidad2+" unidades con valor de "+ multiplicar(cantidad2,chipsManzana.precioUnitario) + "$");
                } else if (cantidad2 > chipsManzana.cantUnitaria) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido2 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido2 <= chipsManzana.cantMayor && pedido2 >= 0) {
                    ultimaCompra=multiplicar(pedido2, chipsManzana.precioMayor)
                    total = sumar(total,ultimaCompra);
                    pedidos = sumar(pedidos, pedido2);
                    subtotal.push(new valor("compra al por mayor de chips de manzana",ultimaCompra));
                    carrito.push(chipsManzana);
                    alert("Se añadió un pedido de "+pedido2+" kg por valor de "+multiplicar(pedido2,chipsManzana.precioMayor) +"$");
                } else if (pedido2 > chipsManzana.precioMayor) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 3:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."))
            if (pregunta == 1) {
                cantidad3 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad3 <= zanahorias.cantUnitaria && cantidad3 >= 0) {
                    ultimaCompra=multiplicar(cantidad3, zanahorias.precioUnitario)
                    total = sumar(total,ultimaCompra);
                    cantidad = sumar(cantidad, cantidad3);
                    subtotal.push(new valor("compra unitaria de zanahorias",ultimaCompra));
                    carrito.push(zanahorias);
                    alert("Se agregaron "+cantidad3+" unidades con valor de "+ multiplicar(cantidad3,zanahorias.precioUnitario)+ "$");
                } else if (cantidad3 > zanahorias.cantUnitaria) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido3 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido3 <= zanahorias.cantMayor && pedido3 >= 0) {
                    ultimaCompra=multiplicar(pedido3, zanahorias.precioMayor);
                    total = sumar(total,ultimaCompra);
                    pedidos = sumar(pedidos, pedido3);
                    subtotal.push(new valor("compra al por mayor de zanahorias",ultimaCompra));
                    carrito.push(pureVerdura);
                    alert("Se añadió un pedido de "+pedido3+" kg por valor de "+multiplicar(pedido3,zanahorias.precioMayor)+"$");
                } else if (pedido3 > zanahorias.cantMayor) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 4:
            pregunta = parseInt(prompt("Ingrese: 1-para comprar por unidad. 2-para comprar al por mayor."));
            if (pregunta == 1) {
                cantidad4 = parseInt(prompt("Ingrese cantidad de unidades"));
                if (cantidad4 <= legumbresPlatano.cantUnitaria && cantidad4 >= 0) {
                    ultimaCompra=multiplicar(cantidad4, legumbresPlatano.precioUnitario)
                    total = sumar(total,ultimaCompra);
                    cantidad = sumar(cantidad, cantidad4);
                    subtotal.push(new valor("compra unitaria de legumbres",ultimaCompra));
                    carrito.push(legumbresPlatano);
                    alert("Se agregaron "+cantidad4+" unidades con valor de "+ multiplicar(cantidad4,legumbresPlatano.precioUnitario) +"$");
                } else if (cantidad4 > legumbresPlatano.cantUnitaria) {
                    alert("supera la disponibilidad del producto");
                }
                else {
                    alert("Ingrese una cantidad válida");
                }
            } else if (pregunta == 2) {
                pedido4 = parseInt(prompt("Ingrese cantidad de pedido (kg)"));
                estado = true;
                if (pedido4 <= legumbresPlatano.cantMayor && pedido4 >= 0) {
                    ultimaCompra=multiplicar(pedido4, legumbresPlatano.precioMayor)
                    total = sumar(total,ultimaCompra );
                    pedidos = sumar(pedidos, pedido4);
                    subtotal.push(new valor("compra al por mayor de legumbres",ultimaCompra));
                    carrito.push(legumbresPlatano);
                    alert("Se añadió un pedido de "+pedido4+" kg por valor de "+multiplicar(pedido4,legumbresPlatano.precioMayor)+"$");
                } else if (pedido4 > maxcl) {
                    alert("Supera la disponibilidad del producto");
                } else {
                    alert("Ingrese una cantidad válida");
                }
            } else {
                alert("Ingrese una opción válida")
            }
            break;
        case 5:
            alert("Su impuesto es de "+multiplicar(total,impuestos)+"$");
            total=total+multiplicar(total,impuestos);
        break;
        case 6:
            buscar=prompt("Ingrese: 1-para buscar compras de pure de verdura, 2-para buscar compras de chips de manzana, 3-para buscar compras de zanahorias, 4-para buscar compras de legumbres");
            if(buscar==1 && carrito.some(elemento=>elemento.nombre==="Pure de verduras")){
                console.log(carrito.filter(elementos=>{return elementos.precioUnitario==pureVerdura.precioUnitario}));
            }else if(buscar==2 && carrito.some(elemento=>elemento.nombre==="Chips de Manzana")){
                console.log(carrito.filter(elementos=>{return elementos.cantUnitaria==chipsManzana.precioUnitario}));
            }else if(buscar==3 && carrito.some(elemento=>elemento.nombre==="Snack de zanahorias")){
                console.log(carrito.filter(elementos=>{return elementos.cantUnitaria==zanahorias.precioUnitario}));
            }else if(buscar==4 && carrito.some(elemento=>elemento.nombre==="Mix de legumbres y platano")){
                console.log(carrito.filter(elementos=>{elementos.precioUnitario==legumbresPlatano.precioUnitario}));
            }
            break;
        case 7:
            eliminar=parseInt(prompt("Ingrese: 1-para eliminar ultima compra. 2-para seguir comprando"))
            if(eliminar==1 && carrito.length>0){
                total=restar(total,ultimaCompra);
                subtotal.pop();
                carrito.pop();
                alert("Se eliminó la ultima compra realizada por:"+parseInt(ultimaCompra));
            }else if(carrito.length==0){
                alert("no se ha realizado ninguna compra");
            }else if(eliminar==2 &&carrito.length>0){
                alert("No se eliminó la última compra");
            }else{
                alert("ingrese una opción válida");
            }
            break;
        case 8:
            recorrercarrito(carrito,subtotal,console.log);
            if (estado == false)
            alert("Su compra tiene un valor total de: " + total + "$USD con una cantidad de: " + cantidad + " unidades");
        else if (cantidad == 0) {
            alert("Su compra tiene un valor total de: " + total + "$USD con un pedido al por mayor en kilogramos de: " + pedidos);
        }
        else {
            alert("Su compra tiene un valor total de: " + total + "$USD con una cantidad de: " + cantidad + " unidades y un pedido al por mayor en kilogramos de: " + pedidos);

        }
        break;

            break;
        case 9:
            alert("Gracias por su compra en FreshDia, vuelva pronto");
            break;

    }
}






