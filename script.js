function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

/* 🚀 Exercício 1:

Crie um calendário dinamicamente.

O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
A tag <ul> deve conter o id 'days';

Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>

Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>*/

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const getUl = document.getElementById("days");

function createDaysList() {
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let getIndex = decemberDaysList[i];
    let createLi = document.createElement("li");
    createLi.className = "day";
    createLi.innerHTML = decemberDaysList[i];
    getUl.appendChild(createLi);

    if (getIndex === 24 || getIndex === 31) {
      createLi.className = "day holiday";
    } else if (getIndex === 4 || getIndex === 11 || getIndex === 18) {
      createLi.className = "day friday";
    } else if (getIndex === 25) {
      createLi.className = "day holiday friday";
    }
  }
}
createDaysList();

/* 🚀 Exercício 2:
Implemente uma função que crie dinamicamente um botão com o nome "Feriados".

Sua função deve receber um parâmetro com a string 'Feriados'
Adicione a este botão a ID "btn-holiday"

Adicione este botão como filho/filha da tag <div> com classe "buttons-container" */

const getTag = document.getElementsByClassName("buttons-container")[0];

function createButton(string) {
  const createBtn = document.createElement("button");
  createBtn.id = "btn-holiday";
  getTag.appendChild(createBtn);
  createBtn.innerHTML = string;
}
createButton("Feriados");

/*🚀 Exercício 3:
Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"

👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".*/

/*function displayHolidays() { 

let getButton = document.querySelector('#btn-holiday');
let getClasses = document.querySelectorAll('.holiday');
let backgroundColor = 'rgb(238,238,238)';
let newColor = 'green'

getButton.addEventListener('click', function() {
  for (let i = 0; i < getClasses.length; i += 1) {
    if (getClasses[i].style.backgroundColor === newColor) {
      getClasses[i].style.backgroundColor = backgroundColor;
    } else {
      getClasses[i].style.backgroundColor = newColor;
    }    
  }  
});
} function displayHolidays() {

} displayHolidays()*/

/*🚀 Exercício 4:
Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".

Adicione a esse botão o ID "btn-friday";

Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

*/

const createbtn2 = document.createElement("button");

function createDay(string) {
  createbtn2.id = "btn-friday";
  getTag.appendChild(createbtn2);
  createbtn2.innerHTML = string;
}
createDay("Sexta-feira");

/*🚀 Exercício 5:
Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.

👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.*/
const getFriday = document.querySelectorAll(".friday");

function getAllFridays() {
  for (let i = 0; i < getFriday.length; i += 1) {
    getFriday[i].innerHTML = "Sextou!!";
  }
}

createbtn2.addEventListener("click", getAllFridays);
