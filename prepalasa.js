const Tiempodecocinado = 40;

const capas = parseInt(prompt('cuantas capas tiene la lasaña?'));
const cocinado = parseInt(prompt('cuantos minutos tiene la lasaña en el horno?'));

const tiemporestante = Math.max(Tiempodecocinado - cocinado, 0);
const tiempoprepara = capas * 2;
const tiempototal = cocinado + tiempoprepara;


document.write("<p>Tiene " + tiemporestante + " minutos restantes</p>");
document.write("<p>Durara " + tiempoprepara + " minutos en la preparacion</p>");
document.write("<p>Durara " + tiempototal + " minutos en total</p>");