function documentLoaded() {
    // const myContainer = document.getElementById('table-container');
    // console.log(myContainer);
    // myContainer.innerHTML = 'Hello world!';
    setInterval(printTime, 1000);
}

function printTime() {
    const currentDate = new Date();
    const container = document.getElementById('calculator-container');
    container.innerText = `${currentDate.getHours()} : ${currentDate.getMinutes()} : ${currentDate.getSeconds()}`;
}

function getInputValue(inputId) {
    return parseFloat(document.getElementById(inputId).value);
}

function validate(firstNumber, secondNumber) {
    if (Number.isNaN(firstNumber)) {
        alert('Pierwsze pole nie zawiera liczby');
        return false;
    }
    if (Number.isNaN(secondNumber)) {
        alert('Drugie pole nie zawiera liczby');
        return false;
    }
    return true;
}

function getResultContainer() {
    return document.getElementById('calculator-container');
}

function sum() {
    const firstNumber = getInputValue('liczba1');
    const secondNumber = getInputValue('liczba2');
    if (!validate(firstNumber, secondNumber)) {
        return;
    }
    getResultContainer().innerText = firstNumber + secondNumber;
}

function sub() {
    const firstNumber = getInputValue('liczba1');
    const secondNumber = getInputValue('liczba2');
    if (!validate(firstNumber, secondNumber)) {
        return;
    }
    getResultContainer().innerText = firstNumber - secondNumber;
}

function mul() {
    const firstNumber = getInputValue('liczba1');
    const secondNumber = getInputValue('liczba2');
    if (!validate(firstNumber, secondNumber)) {
        return;
    }
    getResultContainer().innerText = firstNumber * secondNumber;
}

function div() {
    const firstNumber = getInputValue('liczba1');
    const secondNumber = getInputValue('liczba2');
    if (!validate(firstNumber, secondNumber)) {
        return;
    }
    if (secondNumber == 0) {
        alert('Nie można dzielić przez 0');
        return;
    }
    getResultContainer().innerText = firstNumber / secondNumber;
}

var secondsHand = document.querySelector('.seconds'),
    minutesHand = document.querySelector('.minutes'),
    hoursHand = document.querySelector('.hours'),
    now = new Date();

var setupClock = function() {
    var secs = now.getSeconds(),
        mins = now.getMinutes() * 60,
        hours = now.getHours() * 3600;

    secondsHand.style.animationDelay = '-' + secs + 's';
    minutesHand.style.animationDelay = '-' + mins + 's';
    hoursHand.style.animationDelay = '-' + hours + 's';
}

setupClock();