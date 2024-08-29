// creo le constanti globali
const numEstratti = [];
const divTabellone = [];
const ul = document.createElement("ul");
const button = document.querySelector("button");

// genero il tabellone
const generaTabellone = () => {
  const div = document.querySelector(".tabellone");
  for (let i = 1; i < 91; i++) {
    let cell = document.createElement("div");
    let number = document.createElement("h4");
    cell.classList.add("inline-block");
    divTabellone.push(i);

    number.innerText = i;

    div.appendChild(cell);
    cell.appendChild(number);
  }
};
generaTabellone();

// genero l' estrazione legata ad un bottone
const estrazione = () => {
  const numeroEstratto = Math.ceil(Math.random() * 90);
  const li = document.createElement("li");
  li.innerText = numeroEstratto;
  numEstratti.push(numeroEstratto);

  const div = document.querySelector(".estrazione");
  div.appendChild(ul);
  ul.appendChild(li);
  mettiLaBucciaDiArancia();
};

// creo l' evidenziamento del numero sul tabellone rispetto l'estrazione
const mettiLaBucciaDiArancia = () => {
  let h4 = document.querySelectorAll("h4");

  for (let i = 0; i < h4.length; i++) {
    let singleH4 = h4[i];
    numEstratti.forEach((numeroEstratto) => {
      if (numeroEstratto == singleH4.innerText) {
        singleH4.style.backgroundColor = "orange";
      }
    });
  }
};

button.addEventListener("click", estrazione);
