const proyects = [
  "./Veterinaria/index.html",
  "./Calculadora/index.html",
  "./Calendario/index.html",
  "./Curriculum/cv.html",
  "./Factura/index.html",
  "./Galería/index.html",
  "./Pagina_quien_soy/index.html",
  "./Semaforo/index.html"
];
const fondos = [
  "https://cdn-icons-png.flaticon.com/128/7174/7174739.png",
  "./img/calculadora.png",
  "https://cdn.icon-icons.com/icons2/3150/PNG/512/calendar_icon_192645.png",
  "./img/cv.png",
  "./img/factura.png",
  "./img/galeria.png",
  "./img/quienSoy.png",
  "./img/semaforo.png"
];

const extra = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"

proyects.forEach((proyect, i) => {
  const cards = document.createElement("a");
  const img = document.createElement("img")

  cards.href = proyect;
  cards.id = `link${i}`;


  if(fondos[i] !== undefined) img.src = fondos[i];
  else img.src = extra;

  document.querySelector(`#cont`).appendChild(cards);
  cards.appendChild(img);
});
