// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

  

let generateButton = document.querySelector('.play-button');
let generateBoxCell = document.querySelector('.cell-container');
let levelDifficult = document.querySelector("#select-level");

generateButton.addEventListener('click', function() {
  generateBoxCell.innerHTML = '';

  if (levelDifficult.value === "difficoltà 1") {
    for (let i = 1; i <= 100; i++) {
      let singleCell = createElement('div', 'cell-1');
      singleCell.classList.toggle('cell-box');
      singleCell.innerHTML = i;

      singleCell.addEventListener('click', function() {
        singleCell.classList.toggle('selected-cell');
        console.log("You selected: ", singleCell.innerHTML);
      });

      generateBoxCell.appendChild(singleCell);
    }
  } else if (levelDifficult.value === "difficoltà 2") {
    for (let i = 1; i <= 81; i++) {
      let singleCell = createElement('div', 'cell-2');
      singleCell.classList.toggle('cell-box');
      singleCell.innerHTML = i;

      singleCell.addEventListener('click', function() {
        singleCell.classList.toggle('selected-cell');
        console.log("You selected: ", singleCell.innerHTML);
      });

      generateBoxCell.appendChild(singleCell);
    }
  } else if (levelDifficult.value === "difficoltà 3") {
    for (let i = 1; i <= 49; i++) {
      let singleCell = createElement('div', 'cell-3');
      singleCell.classList.toggle('cell-box');
      singleCell.innerHTML = i;

      singleCell.addEventListener('click', function() {
        singleCell.classList.toggle('selected-cell');
        console.log("You selected: ", singleCell.innerHTML);
      });

      generateBoxCell.appendChild(singleCell);
    }
  }
});

function createElement(tagName, className) {
  const cellElement = document.createElement(tagName);
  cellElement.className = className;
  return cellElement;
}

