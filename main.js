const proyects = [{
    calendario: "https://halg830.github.io/calendario.github.io/"
},
  "https://www.youtube.com/",
  "https://www.youtube.com/",
  "https://www.youtube.com/",
  "https://www.youtube.com/",
  "https://www.youtube.com/",
];
const fondos = [
  "https://cdn.icon-icons.com/icons2/3150/PNG/512/calendar_icon_192645.png",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",
];

for (let i = 0; i < proyects.length; i++) {
  document.querySelector("#cont").innerHTML += `<a id="link${i}" href="${proyects[i].calendario}"></a>`;
  document.querySelector(`#link${i}`).style.backgroundImage += `url(${fondos[i]})`;
}
