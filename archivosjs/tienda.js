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
let compra_pure=document.getElementById("boton__pure");
let compra_chips=document.getElementById("boton__manzana");
let compra_zanahoria=document.getElementById("boton__zanahoria");
let compra_mix=document.getElementById("boton__legumbre");
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