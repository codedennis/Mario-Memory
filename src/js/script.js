const main = document.getElementById("main");
renderCard();
function renderCard() {
  const arrDuplicado = [...personagens, ...personagens];
  const shufflePersonagens = shuffleArray(arrDuplicado);
  console.log(shufflePersonagens);

  for (let index = 0; index < personagens.length; index++) {
    let carta = document.createElement("img");
    carta.id = shufflePersonagens[i].id;
    carta.addEventListener("click", clickCarta);
    carta.src = "./src/img/QuestionBlock.png";
    main.appendChild(carta);
  }
}

function clickCarta(event) {
  const clickedImg = event.target;
  let clickedId = event.target.id;

  let clickedCharacter = personagens.find(
    (elemento) => elemento.id == clickedId
  );
  clickedImg.src = clickedCharacter.img;

  if (click01 == null) {
    click01 = clickedImg;
  } else {
    click02 = clickedImg;
    testPar();
  }
}

function shuffleArray(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[j]] = [arr[j], arr[index]];
  }
  return arr;
}
