const main = document.getElementById("main");
renderCard();
function renderCard() {
  const arrDuplicado = [...personagens, ...personagens];

  const shufflePersonagens = shuffleArray(personagens);

  for (let index = 0; index < personagens.length; index++) {
    let cartaA = document.createElement("img");
    cartaA.src = "./src/img/QuestionBlock.png";
    let cartaB = document.createElement("img");
    cartaB.src = "./src/img/QuestionBlock.png";

    main.appendChild(cartaA);
    main.appendChild(cartaB);
  }
}

function shuffleArray(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[j]] = [arr[j], arr[index]];
  }
  return arr;
}
