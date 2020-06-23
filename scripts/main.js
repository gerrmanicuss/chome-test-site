// сохраняем ссылку на наш элемент <img> в переменной myImage. 
let myImage = document.querySelector('img');
// Cоздаём этой переменной обработчик события onclick с анонимной функцией
myImage.onclick = function () {
    // получаем значение из атрибута src изображения
    let mySrc = myImage.getAttribute('src');
    // используем условие для проверки значения src, равен ли путь к исходному изображению 
    if (mySrc === 'images/icons_Chrome.png') {
        myImage.setAttribute('src', 'images/chrome.png');
    } else {
        myImage.setAttribute('src', 'images/icons_Chrome.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Chrome is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chrome is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}