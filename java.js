const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const eight = document.querySelector('.eight');
const seven = document.querySelector('.seven');
const nine = document.querySelector('.nine');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const zero = document.querySelector('.zero');
const is = document.querySelector('.is');
let p1 = document.querySelector('.p-1');
const mno = document.querySelector('.mno');
const dilen = document.querySelector('.dilit');
const C = document.querySelector('.cenel');

let num1 = '';
let num2 = '';
let value = '';
let num3 = '';
let krn = '';

// -------------calculator-------------------

window.onload = () => {
    p1.innerHTML = 0;
}
is.onclick = () => {
    plus.style.color = '#DEDEDE';
    minus.style.color = '#DEDEDE';
    mno.style.color = '#DEDEDE';
    dilen.style.color = '#DEDEDE';
    if (value == '+') {
        num3 = +num1 + +num2;
        p1.innerHTML = num3;
        num1 = num3;
        num2 = '';
    }
    else if (value == '-') {
        num3 = +num1 - +num2;
        p1.innerHTML = num3;
        num1 = num3;
        num2 = '';
    }
    else if (value == '++') {
        num3 = num1 * num2;
        p1.innerHTML = num3;
        num1 = num3;
        num2 = '';
    }
    else if (value == '/') {
        if (num2 = '0') {
            p1.innerHTML = 'Error';
            num2 = '';
        }
        else {
            num3 = num1 / num2;
            p1.innerHTML = num3;
            num1 = num3;
            num2 = '';
        }
    }
}

C.onclick = () => {
    num1 = num2 = num3 = value = '';
    p1.innerHTML = 0;
    plus.style.color = '#DEDEDE';
    minus.style.color = '#DEDEDE';
    mno.style.color = '#DEDEDE';
    dilen.style.color = '#DEDEDE';
}
dilen.onclick = () => {
    value = '/';
    plus.style.color = '#DEDEDE';
    minus.style.color = '#DEDEDE';
    mno.style.color = '#DEDEDE';
    dilen.style.color = '#7C9399 ';
}
mno.onclick = () => {
    value = '++';
    plus.style.color = '#DEDEDE';
    minus.style.color = '#DEDEDE';
    mno.style.color = '#7C9399';
    dilen.style.color = '#DEDEDE';
}
plus.onclick = () => {
    value = '+';
    plus.style.color = '#7C9399';
    minus.style.color = '#DEDEDE';
    mno.style.color = '#DEDEDE';
    dilen.style.color = '#DEDEDE';
}
minus.onclick = () => {
    value = '-';
    plus.style.color = '#DEDEDE';
    minus.style.color = '#7C9399';
    mno.style.color = '#DEDEDE';
    dilen.style.color = '#DEDEDE';
}


one.onclick = function () {
    console.log('alalaka');
    if (value == '') {
        num1 = p1.innerHTML = num1 + '1';
    }
    else {
        num2 = p1.innerHTML = num2 + '1';
    }
}
two.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '2';
    }
    else {
        num2 = p1.innerHTML = num2 + '2';
    }
}
three.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '3';
    }
    else {
        num2 = p1.innerHTML = num2 + '3';
    }
}
four.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '4';
    }
    else {
        num2 = p1.innerHTML = num2 + '4';
    }
}
five.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '5';
    }
    else {
        num2 = p1.innerHTML = num2 + '5';
    }
}
six.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '6';
    }
    else {
        num2 = p1.innerHTML = num2 + '6';
    }
}
seven.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '7';
    }
    else {
        num2 = p1.innerHTML = num2 + '7';
    }
}
eight.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '8';
    }
    else {
        num2 = p1.innerHTML = num2 + '8';
    }
}
nine.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '9';
    }
    else {
        num2 = p1.innerHTML = num2 + '9';
    }
}
zero.onclick = function () {
    if (value == '') {
        num1 = p1.innerHTML = num1 + '0';
    }
    else {
        num2 = p1.innerHTML = num2 + '0';
    }
}



