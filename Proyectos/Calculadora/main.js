let num1 = 0;
let num2 = 0;
let val = "";

const contentText = [1,2,3,"+","-",4,5,6,"*","/",7,8,9,"^","√",0,".","C","="];

let cont = 0;
for (let i = 0; i < 4; i++) {
  document.querySelector("table").innerHTML += `<tr id="row${i}"></tr>`;

  for (let k = 0; k < 5; k++) {
    if (cont === contentText.length) break;
    else {
      if (typeof contentText[cont] === "number") document.querySelector(`#row${i}`).innerHTML += `<td><button class="num">${contentText[cont]}</button></td>`;
      else if (contentText[cont] === "=") document.querySelector(`#row${i}`).innerHTML += `<td colspan="2"><button>${contentText[cont]}</button></td>`;
      else document.querySelector(`#row${i}`).innerHTML += `<td><button>${contentText[cont]}</button></td>`;
      cont++;
    }
  }
}

function calcular(operator, callback){
  if(val !== "" && val !== operator && operator!=="=") {
    num2 = eval(`${num2} ${val} ${num1}`)
    document.querySelector("#box").value = 0;
    callback(true)
  }
  else if(val !== "" && operator ==="=") {
    const result = eval(`${num2} ${val} ${num1}`)
    document.querySelector("#box").value = `=${result}`;
  } else callback(false)
}

function colocar(event) {
  const valor = event.target.textContent;
  if (/^\d$/.test(valor) || valor === ".") {
    if (valor === "." && document.querySelector("#box").value.includes(".") === false) document.querySelector("#box").value += ".";
    else if (document.querySelector("#box").value.includes("=") && valor !== ".") {
      document.querySelector("#box").value = valor;
        num1 = 0;
        num2 = 0;
        val = "";
    } else if (valor !== "." && document.querySelector("#box").value != 0) document.querySelector("#box").value += valor;
    else if (valor !== "." && document.querySelector("#box").value == 0) document.querySelector("#box").value = valor;
  }

  num1 = parseFloat(document.querySelector("#box").value);

  switch (valor) {
    case "+":
      calcular("+", ()=>{
          num2 += parseFloat(document.querySelector("#box").value);
          document.querySelector("#box").value = 0;
          val = "+";
      })
      break;
    case "-":
      calcular("-", ()=>{
        if (num2 === 0) {
          num2 = parseFloat(document.querySelector("#box").value);
        } else num2 -= parseFloat(document.querySelector("#box").value);
        document.querySelector("#box").value = 0;
        val = "-";
      })
      break;
    case "*":
      calcular("*", (c)=>{
        if(c===false){
          if (num2 === 0) {
            num2 = parseFloat(document.querySelector("#box").value);
          } else num2 *= parseFloat(document.querySelector("#box").value);
          document.querySelector("#box").value = 0;
          val = "*";
        } else{
          val = "*"
        }
      })
      break;
    case "/":
      calcular("/", ()=>{
        if (num2 === 0) {
          num2 = parseFloat(document.querySelector("#box").value);
        } else num2 /= parseFloat(document.querySelector("#box").value);
        document.querySelector("#box").value = 0;
        val = "/";
      })
      break;
    case "^":
      calcular("*", ()=>{
        if (num2 === 0) {
          num2 = parseFloat(document.querySelector("#box").value);
        } else num2 **= parseFloat(document.querySelector("#box").value);
        document.querySelector("#box").value = 0;
        val = "**";
      })
      break;
    case "√":
      document.querySelector("#box").value = Math.sqrt(
        parseFloat(document.querySelector("#box").value)
      );
      break;
    case "C":
      num1 = 0;
      num2 = 0;
      val = "";
      document.querySelector("#box").value = 0;
      break;
    case "=":
      calcular("=")
      break;
  }
}

document.querySelectorAll("button").forEach((boton)=> boton.addEventListener("click", colocar));