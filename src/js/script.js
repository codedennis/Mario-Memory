const main = document.getElementById("main");

function renderCard() {
  for (let index = 0; index < 8; index++) {
    let carta = document.createElement("img");
    carta.src = "./src/img/QuestionBlock.png";
    main.appendChild(carta);
  }
}

renderCard();
