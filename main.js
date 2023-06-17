const proyects = [
  "./Calculadora/index.html",
  "./Calendario/index.html",
  "./Curriculum/cv.html",
  "./Factura/index.html",
  "./Galería/index.html",
  "./Pagina_quien_soy/index.html",
  "./Semaforo/index.html",
  "./Calculadora/index.html",
  "./Calendario/index.html",
  "./Curriculum/cv.html",
  "./Factura/index.html",
  "./Galería/index.html",
  "./Pagina_quien_soy/index.html",
  "./Semaforo/index.html",
  "./Calculadora/index.html",
  "./Calendario/index.html",
  "./Curriculum/cv.html",
  "./Factura/index.html",
  "./Galería/index.html",
  "./Pagina_quien_soy/index.html",
  "./Semaforo/index.html"
];
const fondos = [
  "https://img.freepik.com/iconos-gratis/calculadora_318-798605.jpg",
  "https://cdn.icon-icons.com/icons2/3150/PNG/512/calendar_icon_192645.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
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
