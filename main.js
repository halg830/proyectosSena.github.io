const proyects = [
  "./Pokedex/index.html",
  "./ahorcado/index.html",
  "./Veterinaria/index.html",
  "./Calculadora/index.html",
  "./Calendario/index.html",
  "./Curriculum/cv.html",
  "./Factura/index.html",
  "./Galería/index.html",
  "./Pagina_quien_soy/index.html",
  "./Semaforo/index.html",
  "./TiendaOnline/index.html"
];
const fondos = [
  "data:image/png;base64,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",
  "https://cdn-icons-png.flaticon.com/128/7174/7174739.png",
  "./img/calculadora.png",
  "https://cdn.icon-icons.com/icons2/3150/PNG/512/calendar_icon_192645.png",
  "./img/cv.png",
  "./img/factura.png",
  "./img/galeria.png",
  "./img/quienSoy.png",
  "./img/semaforo.png",
  "./img/tienda.png"
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
