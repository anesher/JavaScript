"use script"

let precio=prompt("introduce el precio para calcular el iva");
precio=Number(precio);

let iva= precio*1.21;
iva=Number(iva);
precioF=iva.toFixed(1)+precio;
precioF=Number(precioF);
alert("el precio con iva es de :"+ precioF);