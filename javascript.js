const galletas = "🍪Galletas";
const donas = "🍩Donas";
let precioKiloGalletas = 60;
let precioKiloDonas = 80;
let cantidadGalletas = 0;
let cantidadDonas = 0;
let subtotalDonas = 0;
let subtotalGalletas = 0;
let total = 0;
let montoCuota = 0;
let cantidadCuotas = 0;
let codigoDescuento = "ADALOVELACE";
let codigoDescuentoIngresado = "";
let descuento = 0.15;
let montoCuotaDescuento = 0;
let totalDescuento = 0;
let respuestaDescuento = "";

//Bienvenida a la tienda
const nombreUsuario = prompt(`Bienvenida a la tienda!
Por favor, ingresá tu nombre:`);

//Presentación de productos en promoción
alert(`Hola ${nombreUsuario}, tenemos en promoción los siguientes productos:
${galletas}
${donas}`);

let respuestaGalletas = prompt(`¿Deseas comprar ${galletas}? (SI/NO)`);
respuestaGalletas ==="SI" && (cantidadGalletas = prompt(`¿Cuántos kilos queres comprar?`));
let respuestaDonas = prompt(`¿Deseas comprar ${donas}? (SI/NO)`);
respuestaDonas ==="SI" && (cantidadDonas = prompt(`¿Cuántos kilos queres comprar?`));


//Detalle de compra hasta el momento
subtotalGalletas = precioKiloGalletas * cantidadGalletas;
subtotalDonas = precioKiloDonas * cantidadDonas;
total = subtotalGalletas + subtotalDonas;


alert(`Detalle de tu compra: 
${galletas}, $ ${precioKiloGalletas} x ${cantidadGalletas} = $ ${subtotalGalletas}
${donas}, $ ${precioKiloDonas} x ${cantidadDonas} = $ ${subtotalDonas}

Total: $ ${total}`);


//Preguntar si quiere abonar con tarjeta de credito y en cuantas cuotas
let respuestaTarjeta = prompt(`${nombreUsuario}, ¿Deseas abonar con tarjeta de crédito?`);
respuestaTarjeta ==="SI" && (cantCuotas = prompt(`¿En cuántas cuotas deseas abonar?`));

montoCuota = total / cantCuotas;


//Detalle de compra abonando con tarjeta de credito
cantidadCuotas != 0 && alert(`Detalle de tu compra: 
${galletas}, $ ${precioKiloGalletas} x ${cantidadGalletas} = $ ${subtotalGalletas}
${donas}, $ ${precioKiloDonas} x ${cantidadDonas} = $ ${subtotalDonas}

Total de tu compra: $ ${total}

A pagar en ${cantidadCuotas} cuotas de $${montoCuota}`);


//Preguntar si tiene un código de descuento y aplicarlo
respuestaDescuento = prompt(`${nombreUsuario}, ¿Tenes un código de descuento?(SI/NO)`);
respuestaDescuento ==="SI" && (codigoDescuentoIngresado = prompt("Ingresá el código:"));
(respuestaDescuento ==="SI" && (codigoDescuentoIngresado !== codigoDescuento)) && (codigoDescuentoIngresado = prompt(`Código incorrecto. Ingresalo nuevamente`));


totalDescuento = total - (total * descuento);
montoCuotaDescuento = totalDescuento / cantidadCuotas;



//Detalle de compra abonando con tarjeta de credito y con codigo de descuento
cantidadCuotas !== 0 && alert(`Detalle de tu compra: 
${galletas}, $ ${precioKiloGalletas} x ${cantidadGalletas} = $ ${subtotalGalletas}
${donas}, $ ${precioKiloDonas} x ${cantidadDonas} = $ ${subtotalDonas}

Total: $ ${total}

Tenes un descuento de ${descuento * 100}%

Total con descuento: $ ${totalDescuento} en el total de tu compra

A pagar en ${cantidadCuotas} cuotas de $${montoCuotaDescuento}`);


//Detalle de compra abonando sin tarjeta de credito y con codigo de descuento
cantidadCuotas === 0 && alert(`Detalle de tu compra: 
${galletas}, $ ${precioKiloGalletas} x ${cantidadGalletas} = $ ${subtotalGalletas}
${donas}, $ ${precioKiloDonas} x ${cantidadDonas} = $ ${subtotalDonas}

Total: $ ${total}

Tenes un descuento de ${descuento * 100}% en el total de tu compra

Total con descuento: $ ${totalDescuento}`);


alert(`${nombreUsuario}, muchas gracias por tu compra!`)