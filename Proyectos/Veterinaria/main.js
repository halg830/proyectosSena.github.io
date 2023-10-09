function firstMayuscula(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function firstMinuscula(text) {
  console.log("error" + text);
  return text.charAt(0).toLowerCase() + text.slice(1);
}

const data = [
  {
    nombreMascota: "T-rex",
    tipo: "Perro",
    propietario: "Toby",
    telefono: "1234567890",
    fecha: "2023-07-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  },
  {
    nombreMascota: "T-rex",
    tipo: "Perro",
    propietario: "xd",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  } /* ,
  {
    nombreMascota: "T-rex",
    tipo: "Perro",
    propietario: "James",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  },
  {
    nombreMascota: "T-rex",
    tipo: "Perro",
    propietario: "James",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  },
  {
    nombreMascota: "T-rex",
    tipo: "Perro",
    propietario: "James",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  },
  {
    nombreMascota: "T-rex",
    tipo: "Perro",
    propietario: "James",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  }, */,
];

const dataCerradas = [
  {
    nombreMascota: "Michi",
    tipo: "Gato",
    propietario: "xd",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  },
];

const dataAnuladas = [
  {
    nombreMascota: "Nemo",
    tipo: "Pez",
    propietario: "xd",
    telefono: "1234567890",
    fecha: "2023-12-30",
    hora: "14:11",
    sintomas: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum reiciendis, animi ducimus voluptate alias unde delectus quae commodi dolores. Quia beatae quae, iure doloribus rem nemo numquam sint cupiditate sequi.`,
  },
];

let estado = "abiertas";

const imgAnimals = {
  gato: "./img/gato.gif",
  perro: "./img/perro.gif",
  serpiente: "./img/serpiente.gif",
  hamster: "./img/hamster.gif",
  pez: "./img/pez.gif",
  ave: "./img/ave.gif",
  conejo: "./img/conejo.gif",
};

const dataImg = [
  "./img/propietario.png",
  "./img/telefono.png",
  "./img/fecha.png",
  "./img/hora.png",
];

let bd = null;
let c = 0;
let activacionEditar = null;

const caseEstados = {
  abiertas: data,
  cerradas: dataCerradas,
  anuladas: dataAnuladas,
};

document.addEventListener("DOMContentLoaded", () => {
  pintarFiltro();
  filtrar();
});

function iconEditar() {
  let iconEditar = document.createElement("img");
  iconEditar.src = "./img/editar.png";
  iconEditar.setAttribute("class", "iconEditar");

  return iconEditar;
}

let eventoAnterior = "";

function pintar() {
  if(caseEstados[estado].length === 0){
    document.querySelector("#contCitas").innerHTML = "<h1>No hay citas en este apartado</h1>"
    return
  }

  let fragment = document.createDocumentFragment();

  caseEstados[estado].forEach((d, i) => {
    let divCard = document.createElement("div");
    let divSubCard = document.createElement("div");

    let divPerfil = document.createElement("div");
    let imgPerfil = document.createElement("img");
    let nombre = document.createElement("h5");
    let inputNombre = document.createElement("input");
    let errorNombre = document.createElement("span");
    let tipo = document.createElement("b");
    let textTipo = document.createElement("p");
    let subDivPerfil = document.createElement("div");
    let select = document.createElement("select");
    let optionSelect = document.createElement("option");
    let optionGato = document.createElement("option");
    let optionPerro = document.createElement("option");
    let optionSerpiente = document.createElement("option");
    let optionHamster = document.createElement("option");
    let optionPez = document.createElement("option");
    let optionAve = document.createElement("option");
    let optionConejo = document.createElement("option");
    let errorTipo = document.createElement("span");

    let divInfo = document.createElement("div");
    let divPropietario = document.createElement("div");
    let imgPropietario = document.createElement("img");
    let subDivPropietario = document.createElement("div");
    let propietario = document.createElement("b");
    let textPropietario = document.createElement("p");
    let inputPropietario = document.createElement("input");
    let errorPropietario = document.createElement("span");
    let divTelefono = document.createElement("div");
    let imgTelefono = document.createElement("img");
    let subDivTelefono = document.createElement("div");
    let telefono = document.createElement("b");
    let textTelefono = document.createElement("p");
    let inputTelefono = document.createElement("input");
    let errorTelefono = document.createElement("span");

    let divHorario = document.createElement("div");
    let divFecha = document.createElement("div");
    let imgFecha = document.createElement("img");
    let subDivFecha = document.createElement("div");
    let fecha = document.createElement("b");
    let textFecha = document.createElement("p");
    let inputFecha = document.createElement("input");
    let errorFecha = document.createElement("span");
    let divHora = document.createElement("div");
    let imgHora = document.createElement("img");
    let subDivHora = document.createElement("div");
    let hora = document.createElement("b");
    let textHora = document.createElement("p");
    let inputHora = document.createElement("input");
    let errorHora = document.createElement("span");

    let divBody = document.createElement("div");
    let divSintomas = document.createElement("div");
    let sintomas = document.createElement("b");
    let textSintomas = document.createElement("textarea");
    let errorSintomas = document.createElement("span");

    let divBt = document.createElement("div");
    let editar = document.createElement("button");
    let iconEditar = document.createElement("img");
    let cancelar = document.createElement("button");
    let eliminar = document.createElement("select");
    let opcionAbierta = document.createElement("option");
    let opcionCerrar = document.createElement("option");
    let opcionAnular = document.createElement("option");

    divCard.setAttribute("class", "card");
    divSubCard.setAttribute("class", "subCard");

    divPerfil.setAttribute("class", "perfil");
    imgPerfil.setAttribute("class", "card-img-top");
    imgPerfil.setAttribute("loop", "true");
    nombre.setAttribute("class", "card-title");
    nombre.textContent = d.nombreMascota;
    textTipo.setAttribute("class", "tipo");
    textTipo.style.marginLeft = "10px";
    select.setAttribute("class", "selectTipo");
    sintomas.setAttribute("class", "titleSintomas");

    const options = [
      optionSelect,
      optionGato,
      optionPerro,
      optionSerpiente,
      optionHamster,
      optionPez,
      optionAve,
      optionConejo,
    ];
    const valOption = [
      "select",
      "gato",
      "perro",
      "serpiente",
      "hamster",
      "pez",
      "ave",
      "conejo",
    ];

    options.forEach((d, i) => {
      d.setAttribute("value", valOption[i]);
      d.textContent = firstMayuscula(valOption[i]);
    });

    divInfo.setAttribute("class", "info");
    divHorario.setAttribute("class", "horario");
    inputFecha.addEventListener("click", () => bloquearFecha());

    const classAtributo = [divPropietario, divTelefono, divFecha, divHora];
    classAtributo.forEach((d) => d.setAttribute("class", "atributo"));

    const classRta = [
      nombre,
      textTipo,
      textPropietario,
      textTelefono,
      textFecha,
      textHora,
      textSintomas,
    ];
    classRta.forEach((d, i) => {
      if (i > 0 && i != classRta.length - 1) d.setAttribute("class", "rta");
    });

    textSintomas.setAttribute("disabled", "true");
    divBody.setAttribute("class", "card-body");
    divBt.setAttribute("class", "btn-config");
    editar.setAttribute("class", "btn btn-primary");
    iconEditar.src = "./img/editar.png";
    iconEditar.setAttribute("class", "iconEditar");
    editar.addEventListener("click", () => {
      editarRegistro(d, i);
    });
    cancelar.style.display = "none";
    cancelar.setAttribute("class", "btn btn-primary");
    cancelar.textContent = "Cancelar";
    cancelar.addEventListener("click", () => {
      cancelarEditar(d, i);
    });
    opcionAbierta.textContent = "Abierta";
    opcionAbierta.value = "abiertas";
    opcionCerrar.textContent = "Terminada";
    opcionCerrar.value = "cerradas";
    opcionAnular.textContent = "Anulada";
    opcionAnular.value = "anuladas";
    eliminar.setAttribute("class", "btn btn-primary");
    eliminar.addEventListener("change", () => {
      confirmacion(d, i);
    });

    const text = [nombre, tipo, propietario, telefono, fecha, hora, sintomas];

    Object.keys(d).forEach((key, ikey) => {
      if (ikey > 0) text[ikey].textContent = `${firstMayuscula(key)}:`;
      else ikey = 0;
    });
    Object.values(d).forEach((e, i) => {
      if (i > 0) classRta[i].textContent = e;
    });

    const inputs = [
      select,
      textSintomas,
      inputNombre,
      inputPropietario,
      inputTelefono,
      inputFecha,
      inputHora,
    ];
    const propiedades = [
      "tipo",
      "sintomas",
      "nombreMascota",
      "propietario",
      "telefono",
      "fecha",
      "hora",
    ];

    inputs.forEach((e, i) => {
      if (i > 1) e.setAttribute("class", "inputs inputsAgregar");
    });

    inputs.forEach((e, i) => e.classList.add(propiedades[i]));

    inputTelefono.setAttribute("type", "number");
    inputFecha.setAttribute("type", "date");
    inputHora.setAttribute("type", "time");

    const buscarTipo = Object.keys(imgAnimals).find(
      (img) => img.toLowerCase() === d.tipo.toLowerCase()
    );
    imgPerfil.setAttribute("src", `${imgAnimals[buscarTipo]}`);

    const icons = [imgPropietario, imgTelefono, imgFecha, imgHora];
    icons.forEach((e, i) => e.setAttribute("src", `${dataImg[i]}`));

    const errores = [
      errorTipo,
      errorSintomas,
      errorNombre,
      errorPropietario,
      errorTelefono,
      errorFecha,
      errorHora,
    ];
    errores.forEach((d, i) =>
      d.setAttribute("class", `error${firstMayuscula(propiedades[i])} error`)
    );

    function ordenar(opciones) {
      opciones.forEach((o) => eliminar.appendChild(o));
    }

    const caseOpciones = {
      abiertas: () => {
        ordenar([opcionAbierta, opcionCerrar, opcionAnular]);
      },
      cerradas: () => {
        ordenar([opcionCerrar, opcionAbierta, opcionAnular]);
      },
      anuladas: () => {
        ordenar([opcionAnular, opcionCerrar, opcionAbierta]);
      },
    };

    caseOpciones[estado]()
    editar.appendChild(iconEditar);
    divBt.appendChild(editar);
    divBt.appendChild(cancelar);
    eliminar.appendChild(opcionAbierta);
    eliminar.appendChild(opcionCerrar);
    eliminar.appendChild(opcionAnular);
    divBt.appendChild(eliminar);
    divSintomas.appendChild(sintomas);
    divSintomas.appendChild(textSintomas);
    divSintomas.appendChild(errorSintomas);
    divBody.appendChild(divSintomas);
    divBody.appendChild(divBt);

    subDivHora.appendChild(hora);
    subDivHora.appendChild(textHora);
    subDivHora.appendChild(inputHora);
    subDivHora.appendChild(errorHora);
    divHora.appendChild(imgHora);
    divHora.appendChild(subDivHora);

    subDivFecha.appendChild(fecha);
    subDivFecha.appendChild(textFecha);
    subDivFecha.appendChild(inputFecha);
    subDivFecha.appendChild(errorFecha);
    divFecha.appendChild(imgFecha);
    divFecha.appendChild(subDivFecha);

    divHorario.appendChild(divFecha);
    divHorario.appendChild(divHora);

    subDivTelefono.appendChild(telefono);
    subDivTelefono.appendChild(textTelefono);
    subDivTelefono.appendChild(inputTelefono);
    subDivTelefono.appendChild(errorTelefono);
    divTelefono.appendChild(imgTelefono);
    divTelefono.appendChild(subDivTelefono);

    subDivPropietario.appendChild(propietario);
    subDivPropietario.appendChild(textPropietario);
    subDivPropietario.appendChild(inputPropietario);
    subDivPropietario.appendChild(errorPropietario);
    divPropietario.appendChild(imgPropietario);
    divPropietario.appendChild(subDivPropietario);

    divInfo.appendChild(divPropietario);
    divInfo.appendChild(divTelefono);

    select.appendChild(optionSelect);
    select.appendChild(optionGato);
    select.appendChild(optionPerro);
    select.appendChild(optionSerpiente);
    select.appendChild(optionHamster);
    select.appendChild(optionPez);
    select.appendChild(optionAve);
    select.appendChild(optionConejo);
    subDivPerfil.appendChild(tipo);
    subDivPerfil.appendChild(textTipo);
    subDivPerfil.appendChild(select);
    divPerfil.appendChild(imgPerfil);
    divPerfil.appendChild(nombre);
    divPerfil.appendChild(inputNombre);
    divPerfil.appendChild(errorNombre);
    divPerfil.appendChild(subDivPerfil);
    divPerfil.appendChild(errorTipo);

    divSubCard.appendChild(divPerfil);
    divSubCard.appendChild(divInfo);
    divSubCard.appendChild(divHorario);

    divCard.appendChild(divSubCard);
    divCard.appendChild(divBody);
    fragment.appendChild(divCard);
  });
  document.querySelector("#contCitas").appendChild(fragment);
}
let cerrarActivacion = null;
let señalAgregar = null;
function agregar() {
  if (señalAgregar != true) {
    if (cerrarActivacion === true)
      cancelarEditar(cardAnterior.tipo, cardAnterior.index);
    document.querySelector("#divAgregar").innerHTML = `
  <div id="cardAgregar">
    <div class="subCard">
      <div class="perfil">
        <img class="card-img-top" id="imgAgregar" src="./img/huella.png">
        <h5 class="card-title">Nombre:</h5>
        <input class="inputsAgregar nombreMascota">
        <span class="error errorNombreMascota"></span>
        <div>
          <b>Tipo:</b>
          <select class="tipo">
            <option value="select">Seleccione</option>
            <option value="gato">Gato</option>
            <option value="perro">Perro</option>
            <option value="serpiente">Serpiente</option>
            <option value="hamster">Hámster</option>
            <option value="pez">Pez</option>
            <option value="ave">Ave</option>
            <option value="conejo">Conejo</option>
          </select>
        </div>
        <span class="error errorTipo"></span>
      </div>

      <div class="info">
        <div class="atributo">
          <img src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png">
          <div>
            <b>Propietario:</b>
            <input class="inputsAgregar propietario">
            <span class="error errorPropietario"></span>
          </div>
        </div>
      
        <div class="atributo">
          <img src="https://cdn-icons-png.flaticon.com/128/126/126341.png">
          <div>
            <b>Telefono:</b>
            <input class="inputsAgregar telefono" type="number">
            <span class="error errorTelefono"></span>
          </div>
        </div>
      </div>
      
      
      <div class="horario">
        <div class="atributo">
          <img src="https://cdn-icons-png.flaticon.com/128/661/661512.png">
          <div>
            <b>Fecha:</b>
            <input class="inputsAgregar fecha" type="date" onclick="bloquearFecha()">
            <span class="error errorFecha"></span>
          </div>
        </div>
        
        <div class="atributo">
          <img src="https://cdn-icons-png.flaticon.com/128/3114/3114812.png">
          <div>
            <b>Hora:</b>
            <input class="inputsAgregar hora" type="time" min="09:00" max="18:00">
            <span class="error errorHora"></span>
          </div>
        </div>
      </div>
  <button
                type="button"
                class="btn-close"
                onclick="cerrar('cerrar')"
                aria-label="Close"
              ></button>
    </div>
    
    <div class="card-body-agregar">
      <b>Sintomas:</b>
      <textarea class="sintomas"></textarea>
      <span class="error errorSintomas"></span>
      <div class="btn-config" id="divBt">
        <button class="btn btn-primary" id="btnGuardar" onclick="guardar()">Guardar</button>
      </div>
    </div>
  </div>
  `;
    setTimeout(() => {
      document.querySelector("#divAgregar").classList.add("tamano");
      document.querySelector("#cardAgregar").classList.add("aparecer");
    }, 0);
    señalAgregar = true;
    bd = 0;
  }

  const card = document.querySelector(".card");

  cambiarImagen(card, ".tipo", "#imgAgregar");
}

const bloquearFecha = () => {
  console.log(event.target);
  const horaInput = document.querySelector(".hora");
  console.log(horaInput);

  const fechaActual = new Date();
  fechaActual.setDate(fechaActual.getDate() + 1);
  const fechaMinima = fechaActual.toISOString().split("T")[0];
  console.log(fechaMinima);

  event.target.setAttribute("min", fechaMinima);
};

function cambiarImagen(card, select, img) {
  card.querySelector(select).addEventListener("change", function (event) {
    const valorSeleccionado = event.target.value;
    const buscarTipo = Object.keys(imgAnimals).find(
      (img) => img.toLowerCase() === valorSeleccionado.toLowerCase()
    );
    if (buscarTipo) {
      card.querySelector(img).setAttribute("src", `${imgAnimals[buscarTipo]}`);
    } else {
      card
        .querySelector(img)
        .setAttribute(
          "src",
          `https://clipart-library.com/images/rinre6XjT.png`
        );
    }
  });
}

function mostrarMensajeError(elemento, mensaje, id, input, card) {
  elemento.style.display = "block";
  card.querySelectorAll(input).forEach((e) => {
    const listaClases = Array.from(e.classList);
    const buscarClase = listaClases.find((b) => b == id);
    if (buscarClase) {
      e.style.marginBottom = "0";
      e.style.border = "1px solid red";
      e.style.color = "red";
    }
  });

  /* card.style.minHeight = "500px" */

  switch (id) {
    case "tipo":
      card.querySelector(".tipo").style.border = "1px solid red";
      card.querySelector(".tipo").style.color = "red";
      break;
    case "sintomas":
      card.querySelector(".sintomas").style.border = "1px solid red";
  }
  elemento.textContent = mensaje;
  setTimeout(() => {
    elemento.style.display = "none";
    card.querySelector(".tipo").style.border = "1px solid black";
    card.querySelector(".tipo").style.color = "black";
    card.querySelector(".sintomas").style.border = "1px solid black";
    card.querySelectorAll(input).forEach((e) => {
      e.style.marginBottom = "20px";
      e.style.border = "1px solid black";
      e.style.color = "black";
    });
    /* card.style.minHeight = "400px" */
  }, 4000);
}

const campos = [
  { id: "nombreMascota", mensaje: "El campo no debe estar vacío" },
  { id: "propietario", mensaje: "El campo no debe estar vacío" },
  { id: "telefono", mensaje: "Debe digitar un teléfono" },
  { id: "fecha", mensaje: "Debe selecionar una fecha" },
  { id: "hora", mensaje: "Debe seleccionar una hora" },
  { id: "sintomas", mensaje: "Debe ingresar los sintomas" },
];

function validar(card) {
  const errores = [];

  campos.forEach((c) => {
    const boxCampo = card.querySelector(`.${c.id}`).value.trim();
    if (boxCampo === "") {
      errores.push(c);
    }
  });

  const boxTelefono = card.querySelector(".telefono").value.trim();
  const selectTipo = card.querySelector(".tipo").value;
  const boxHora = card.querySelector(".hora").value;

  console.log("hola" + boxTelefono + boxHora);

  if (boxTelefono.length < 10) {
    const errorTelefono = errores.find((d) => d.id === "telefono");
    if (errorTelefono === undefined) {
      errores.push({
        id: "telefono",
        mensaje: "El número debe ser mayor a 10 dígitos",
      });
    }
  }

  if (selectTipo == "select") {
    errores.push({ id: "tipo", mensaje: "Debe seleccionar un tipo" });
  }

  if (boxHora < "08:00" || boxHora > "20:00") {
    const errorHora = errores.find((d) => d.id === "hora");
    if (!errorHora)
      errores.push({
        id: "hora",
        mensaje: "El horario es desde las 8:00 hasta las 20:00",
      });
  }

  if (errores.length > 0) {
    errores.forEach((e) => {
      console.log(firstMayuscula(e.id));
      const errorCampo = card.querySelector(`.error${firstMayuscula(e.id)}`);
      console.log(card);
      let input = "";
      if (card == document) input = ".inputsAgregar";
      else input = ".inputs";
      mostrarMensajeError(errorCampo, e.mensaje, e.id, input, card);
    });
    return false;
  }

  return true;
}

function guardar() {
  if (validar(document)) {
    data.push({
      nombreMascota: document.querySelector(".nombreMascota").value,
      tipo: document.querySelector(".tipo").value,
      propietario: document.querySelector(".propietario").value,
      telefono: document.querySelector(".telefono").value,
      fecha: document.querySelector(".fecha").value,
      hora: document.querySelector(".hora").value,
      sintomas: document.querySelector(".sintomas").value,
    });
    limpiar();

    estado = "abiertas"
    
    document.querySelector("#contCitas").innerHTML = "";
    pintar();
    document.querySelector("#filtros").querySelectorAll("input").forEach(e=>e.checked =false)
    document.querySelector("#abiertas").checked = true
    cerrar("guardar")
    setTimeout(() => {
      señalAgregar = false;
      setTimeout(() => {
        cerrar("cerrar");
      }, 0);
    }, 3000);
  }
}

const limpiar = () => {
  document.querySelector(".nombreMascota").value = "";
  document.querySelector(".propietario").value = "";
  document.querySelector(".telefono").value = "";
  document.querySelector(".tipo").value = "select";
  document.querySelector(".fecha").value = "";
  document.querySelector(".hora").value = "";
  document.querySelector(".sintomas").value = "";
};

function crear() {
  limpiar();
  bd = 0;
}

let editar = null;
let cardAnterior = {};

function editarRegistro(r, i) {
  /* if(editar!=true){ */
  const card = document.querySelectorAll(".card")[i + 1];

  if (confirmar == true) {
    confirmar = false;
    activacionConfirmacion = false;
    borrar(i);
    return;
  }

  /* if(activacionConfirmacion===true){
    confirmar=true
    activacionConfirmacion=false
    confirmacion(i)
  } */

  if (activacionEditar != true) {
    bd = 1;
    console.log(r);
    cerrarActivacion = true;
    /* cerrar("cerrar"); */

    card.querySelectorAll(".btn-primary")[1].style.display = "block";
    card.querySelectorAll(".rta").forEach((e) => (e.style.display = "none"));
    card
      .querySelectorAll(".inputs")
      .forEach((e) => (e.style.display = "block"));
    card.querySelector(".selectTipo").style.display = "block";
    card.querySelector(".sintomas").removeAttribute("disabled");
    card.querySelector(".btn-primary").textContent = "Guardar";

    card.querySelector(".nombreMascota").value = r.nombreMascota;
    card.querySelector(".propietario").value = r.propietario;
    card.querySelector(".telefono").value = r.telefono;
    card.querySelector(".tipo").value = r.tipo.toLowerCase();
    card.querySelector(".fecha").value = r.fecha;
    card.querySelector(".hora").value = r.hora;

    cambiarImagen(card, ".tipo", ".card-img-top");
    activacionEditar = true;
    editar = true;
    cardAnterior = { tipo: r, index: i };
    return;
  } else if (cardAnterior.index != i) {
    cancelarEditar(cardAnterior, cardAnterior.index);
    activacionEditar = false;
    editarRegistro(r, i);
    return;
  }

  if (validar(card)) {
    caseEstados[estado][i] = {
      nombreMascota: card.querySelector(".nombreMascota").value,
      tipo: firstMayuscula(card.querySelector(".tipo").value),
      propietario: card.querySelector(".propietario").value,
      telefono: card.querySelector(".telefono").value,
      fecha: card.querySelector(".fecha").value,
      hora: card.querySelector(".hora").value,
      sintomas: card.querySelector(".sintomas").value,
    };

    avisarAccion(i + 1, "Cambios guardados");

    /* card.classList.add("") */

    setTimeout(() => {
      setTimeout(() => {
        cerrar("cerrar");
      }, 0);
      document.getElementById("contCitas").innerHTML = ``;
      pintar();
    }, 2300);

    editar = false;
    activacionEditar = false;
    cerrarActivacion = false;
  }
}

function cancelarEditar(tipo, i) {
  const card = document.querySelectorAll(".card")[i + 1];

  card.querySelectorAll(".btn-primary")[1].style.display = "none";
  card.querySelectorAll(".rta").forEach((e) => (e.style.display = "block"));
  card.querySelectorAll(".inputs").forEach((e) => (e.style.display = "none"));
  card.querySelector(".selectTipo").style.display = "none";
  card.querySelector(".sintomas").setAttribute("disabled", "true");
  card.querySelector(".btn-primary").textContent = "";
  card.querySelector(".btn-primary").appendChild(iconEditar());
  const tipoAnimal = tipo.tipo.toLowerCase();
  card
    .querySelector(".card-img-top")
    .setAttribute("src", imgAnimals[tipoAnimal]);

  card.querySelector(".sintomas").value = tipo.sintomas;

  activacionEditar = false;
  editar = false;
  señalAgregar = false;
  cerrarActivacion = false;
}

let confirmar = null;
let activacionConfirmacion = null;

const confirmacion = (d, i) => {
  /* const card = document.querySelectorAll(".card")[i + 1]; */

  evento = event.target.value
  caseEstados[evento].push(d)
  caseEstados[estado].splice(i, 1)

  document.querySelector("#contCitas").innerHTML = ""
  pintar()

};

const borrar = (index) => {
  cerrarActivacion = false;
  activacionEditar = false;

  const card = document.querySelectorAll(".card")[index + 1];
  card.classList.add("collapsed");
  caseEstados[estado].splice(index, 1);

  setTimeout(() => {
    señalAgregar = false;
    document.getElementById("contCitas").innerHTML = ``;
    setTimeout(() => {
      cerrar("cerrar");
    }, 0);
    filtros[estado]();
  }, 500);
};

function cerrar(activacion) {
  switch (activacion) {
    case "cerrar":
      document.querySelector("#divAgregar").innerHTML = `
    <img
      src="./img/agregar.png"
      alt=""
      id="agregar"
    />`;
      document.querySelector("#divAgregar").classList.remove("tamano");
      break;
    case "guardar":
      avisarAccion(0, "Cita agendada");
      setTimeout(() => {
        cerrar("cerrar");
      }, 2300);
      break;
  }
  setTimeout(() => {
    señalAgregar = false;
  }, 0);
}

function avisarAccion(i, mensaje) {
  document.querySelectorAll(".card")[i].innerHTML = `
      <img src="https://cdn-icons-gif.flaticon.com/7920/7920939.gif" style="width: 100px">
      <h1>${mensaje}</h1>
      `;
}

function pintarFiltro() {
  const card = document.querySelector("#filtros");
  card.querySelectorAll("input").forEach((d) =>
    d.addEventListener("change", () => {
      estado = d.id;
      filtrar();
    })
  );
}

function filtrar() {
  document.querySelector("#contCitas").innerHTML = ``;
  pintar();
}
