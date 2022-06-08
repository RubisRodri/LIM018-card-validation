import validator from "./validator.js";

console.log(validator.isValid);
let textoT="";
const boton= document.getElementById("btn");
boton.addEventListener( "click", function (e){
  e.preventDefault();

 const creditCarNumber= document.getElementById("numberCard").value;
 document.getElementById("numberCard").value=""
 const result = document.getElementById("result");

 

 // validar tarjeta
 const isValid = validator.isValid(creditCarNumber);
  
 if (isValid === true){
   textoT=  "valida";
 } else{
   textoT="Es tarjeta invalida por favor comunicate con tu proveedor o entidad Bancaria";
 }


//mascara
let nmaskify = validator.maskify(creditCarNumber);
result.innerText = "tu tarjeta numero " + nmaskify+ " " + textoT;
})

//funcion para sumar la cantidad carteras  seleccionados

const checkout= document.getElementById("checkout");

let cuenta = 0;
function sumarCuenta(valor){
  cuenta = cuenta + valor;
  checkout.innerText="Su monto a Pagar es s/"+ cuenta;
}

window.sumarCuenta= sumarCuenta;
