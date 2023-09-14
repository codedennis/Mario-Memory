const main = document.getElementById("main");
renderCard();
function renderCard() {
  const arrDuplicado = [...personagens, ...personagens];
  const shufflePersonagens = shuffleArray(arrDuplicado);
  console.log(shufflePersonagens);

  for (let index = 0; index < personagens.length; index++) {
    let carta = document.createElement("img");
    carta.src = "./src/img/QuestionBlock.png";
    main.appendChild(carta);
  }
}

function shuffleArray(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[j]] = [arr[j], arr[index]];
  }
  return arr;
}
