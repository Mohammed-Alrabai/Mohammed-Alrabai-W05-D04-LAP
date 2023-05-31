//Lap 1

const weekDays = ["Sunday", "Monday", "Tuesday"];
const weekDays2 = ["Wednesday", "Thursday", "Friday", "Saturday"];

const words = ["knot", "roof", "snake", "humanity", "available", "automatic"];

const week = weekDays.concat(weekDays2);
console.log(`week: `, week);

const longWords = words.filter((word) => word.length > 6);
const shortWords = words.filter((word) => word.length <= 6);
console.log(`longWords: `, longWords);
console.log(`shortWords: `, shortWords);

const num = [1, 4, 9, 16, 15, 36, 45];

const map1 = num.map((num) => num * num);
console.log(`map1: `, map1);

const square = num.map((num) => num ** 2);
console.log(`square: `, square);

const filter1 = num.find((num) => num % 3 === 0 && num % 5 === 0);
console.log(`filter1: `, filter1);

const filter2 = num.find((num) => num % 2 === 0);
console.log(`filter2: `, filter2);

const newArray = week.concat(num);
console.log(`newArray: `, newArray);

// const number = ["5", "6", "3"];
// const findNumber = number.find('3');
// console.log(`findNumber: `, findNumber);

const weekToString = week.join(" ");
console.log(`weekToString: `, weekToString);

// Lap 2

const btn = document.getElementById("btn");
const para = document.getElementById("para");
const fontSize = document.getElementById("fontSize");
const fontSizeMinus = document.getElementById("fontSizeMinus");
const name = document.getElementById("name");
const form = document.getElementById("form");
const list = document.getElementById("list");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const valueCalc = document.getElementById("valueCalc");
const background = document.getElementById("addBackground");

btn.addEventListener("click", () => {
  if (para.textContent === "") {
    para.textContent = "Lorem, ipsum dolor.";
  } else {
    para.textContent = "";
  }
});
fontSize.addEventListener("click", () => {
  para.style.fontSize = "20px";
});
fontSizeMinus.addEventListener("click", () => {
  para.style.fontSize = "18px";
});
background.addEventListener("click", () => {
  if (para.style.backgroundColor === "") {
    para.style.backgroundColor = "antiquewhite";
    para.style.width = "300px";
  } else {
    para.style.backgroundColor = "";
  }
});
name.textContent = "Mohammed Alrabai";
name.addEventListener("click", () => {
  const date = Date();
  alert(`date : ${date}`);
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const item1 = document.getElementById("input").value;
  const item2 = document.getElementById("input2").value;
  list.innerHTML += `<li>${item1}</li> <li>${item2}</li>`;
  console.log(list);
});
// Calculator Code
function calculate(operation) {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  var result;
  if (operation === "+") {
    result = Number(num1) + Number(num2);
  } else if (operation === "-") {
    result = Number(num1) - Number(num2);
  } else if (operation === "*") {
    result = Number(num1) * Number(num2);
  } else if (operation === "/") {
    result = Number(num1) / Number(num2);
  }
  document.getElementById("result").textContent = result;
}

const changeImg = document.getElementById("changeImg");
changeImg.addEventListener("click", () => {
  const img = document.getElementById("img");
  img.src = "./img/js_logo.png";
});
