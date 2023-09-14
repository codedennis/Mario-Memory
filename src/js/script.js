const main = document.getElementById("main");
const placarTag = document.getElementById("placar");
const buttonEncerrar = document.getElementById("encerrar");
let click01 = null;
let click02 = null;
let encontrados = 0;
let placar = 0;

renderCard();

buttonEncerrar.addEventListener("click", () => {
    window.location.assign("../../index.html");
  });

function renderCard() {
  const arrDuplicado = [...personagens, ...personagens];
  const shufflePersonagens = shuffleArray(arrDuplicado);
  console.log(shufflePersonagens);

  for (let index = 0; index < shufflePersonagens.length; index++) {
    let carta = document.createElement("img");
    carta.id = shufflePersonagens[i].id;
    carta.addEventListener("click", clickCarta);
    carta.src = "../src/img/QuestionBlock.png";
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

function testPar() {
  if (click01.id == click02.id) {
    console.log("encontrei um par!");
    encontrados++;
    click01 = null;
    click02 = null;

    if (encontrados == 4) {
      placar++;
      placarTag.innerHTML = placar;
      encontrados = 0;

      setTimeout(() => {
        main.innerHTML = "";
        renderizarCartas();
      }, 2000);
    }
  } else {
    setTimeout(() => {
      click01.src = "./src/img/QuestionBlock.png";
      click02.src = "./src/img/QuestionBlock.png";
      click01 = null;
      click02 = null;
    }, 1000);

    console.log("não é par");
  }
}

function shuffleArray(arr) {
  for (let index = arr.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [arr[index], arr[j]] = [arr[j], arr[index]];
  }
  return arr;
}
