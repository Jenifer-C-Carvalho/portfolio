if (window.innerWidth < 800) {
  let cards = document.querySelectorAll('.card');
  for (card of cards) {
    card.removeAttribute('onmouseover');
  }
}
const cardInfo = document.querySelector('.cardInfo');

function infoHTML() {
  cardInfo.style.display = 'flex';
  cardInfo.innerHTML = '<img src="../IMG/html5.svg" <p>HTML é uma linguagem de marcação utilizada na construção de páginas na Web</p>';
  setTimeout(function () {
    cardInfo.style.opacity = '1';
  }, 10);
}

function infoCSS() {
  cardInfo.style.display = 'flex';
  cardInfo.innerHTML = '<img src="../IMG/css3.svg" <p>CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.</p>';
  setTimeout(function () {
    cardInfo.style.opacity = '1';
  }, 10);
}
function infoGIT() {
  cardInfo.style.display = 'flex';
  cardInfo.innerHTML = '<img src="../IMG/git.svg" <p>O GIT é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>';
  setTimeout(function () {
    cardInfo.style.opacity = '1';
  }, 10);
}
function infoJS() {
  cardInfo.style.display = 'flex';
  cardInfo.innerHTML = '<img src="../IMG/javascript.svg" <p>JavaScript é uma linguagem de programação usada por desenvolvedores para fazer páginas interativas da Internet.</p>';
  setTimeout(function () {
    cardInfo.style.opacity = '1';
  }, 10);
}
function infoREACT() {
  cardInfo.style.display = 'flex';
  cardInfo.innerHTML = '<img src="../IMG/react.svg" <p>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>';
  setTimeout(function () {
    cardInfo.style.opacity = '1';
  }, 10);
}


//sumir o card enquanto o mouse não estiver em cima do elemento
function some() {
  cardInfo.style.opacity = '0';
}

