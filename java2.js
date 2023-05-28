// // ---------------kvadrat rivnana------------------
let inp1 = document.querySelector('.inp-1');
let inp2 = document.querySelector('.inp-2');
let inp3 = document.querySelector('.inp-3');
let p2 = document.querySelector('.p-2');
let p3 = document.querySelector('.p-2');
const btn2 = document.querySelector('.btn-2');

let D = '';
let x1 = '';
let x2 = '';

btn2.onclick = function () {
    let a = inp1.value;
    let b = inp2.value;
    let c = inp3.value;
    D = Math.pow(b, 2) - (4 * a * c);
    console.log(D)
    if (D < 0) {
        p2.innerHTML = 'NO ONE RESULT';
    }
    else if (D > 0) {
        x1 = ((-1 * b) + Math.sqrt(D)) / (2 * a);
        x2 = ((-1 * b) - Math.sqrt(D)) / (2 * a);
        p2.innerHTML = 'x1 = ' + x1 + ", x2= " + x2;
    }
    else {
        x1 = -(b / (2 * a))
        p2.innerHTML = 'x =' + ' ' + x1;
    };
};

// ---------------okruzhnost-------------------

const inp4 = document.querySelector('.inp-1');
const btn3 = document.querySelector('.btn-3');

btn3.onclick = () => {
    let C = 2 * 3.14 * inp1.value;
    p3.innerHTML = 'okruznost is ' + C;
}

// ----------------S kruga-----------------------

const inp5 = document.querySelector('.inp-1');
const btn4 = document.querySelector('.btn-4');


btn4.onclick = () => {
    let S = 3.14 * Math.pow(inp1.value, 2);
    p3.innerHTML = S;
}

// ------------------diagonal kuba---------------

const inp6 = document.querySelector('.inp-1');
const btn5 = document.querySelector('.btn-5');

btn5.onclick = () => {
    let d = Math.sqrt(3) * inp1.value;
    p3.innerHTML = d;
}

// ------------------s kvadrata    ---------------

const inp7 = document.querySelector('.inp-1');
const btn6 = document.querySelector('.btn-6');

btn6.onclick = () => {
    p3.innerHTML = Math.pow(inp4.value, 2)
}

// -----------------s Pramokytnika----------------
const inp8 = document.querySelector('.inp-1');
const inp9 = document.querySelector('.inp-2');
const btn7 = document.querySelector('.btn-7');


btn7.onclick = () => {
    p3.innerHTML = inp1.value * inp2.value;
}

// -----------------------speed-------------------

// speed
const inp10 = document.querySelector('.inp-1');
// time
const inp11 = document.querySelector('.inp-2');
// length
const inp12 = document.querySelector('.inp-3');
const btn8 = document.querySelector('.btn-8');

btn8.onclick = () => {
    // speed = 0
    if (inp1.value == '') {
        p3.innerHTML = 'your speed is ' + (inp3.value / inp2.value);
    }
    else if (inp2.value == '') {
        p3.innerHTML = 'your time is ' + (inp3.value / inp1.value);
    }
    else if (inp3.value == '') {
        p3.innerHTML = 'your lengs is ' + (inp2.value * inp1.value);
    }
    else {
        p3.innerHTML = ' cho nado?'
    }
}
// ----------------vidsotki-----------------
const btn9 = document.querySelector('.btn-9')

btn9.onclick = () => {
    p3.innerHTML = '1% = ' + inp1 / 100;
}

// --------------seredne---------------

const btn10 = document.querySelector('.btn-10');
const btn10Plus = document.querySelector('.btn-10P');
let bPvar = '';
let bPlen = '';

btn10Plus.onclick = () => {
    bPvar = +bPvar + +inp1.value;
    console.log(bPvar)
    bPlen = +bPlen + +1;
    console.log(bPlen)
}

btn10.onclick = function calculateAverage() {
    p3.innerHTML = bPvar / bPlen;
}

// ----------------figna bobra------------------
const a10 = document.querySelector('.a-10')
const a11 = document.querySelector('.a-11')
const koren = document.querySelector('.koren')
const step = document.querySelector('.step')


koren.onclick = () => {
    p3.innerHTML = Math.sqrt(inp1.value);
}
step.onclick = () => {
    p3.innerHTML = Math.pow(inp1.value, inp2.value);
}



const a1 = document.querySelector('.a-1')
const a2 = document.querySelector('.a-2')
const a3 = document.querySelector('.a-3')
const a4 = document.querySelector('.a-4')
const a5 = document.querySelector('.a-5')
const a6 = document.querySelector('.a-6')
const a7 = document.querySelector('.a-7')
const a8 = document.querySelector('.a-8')
const a9 = document.querySelector('.a-9')

const calca = document.querySelector('.calc-a')
const calc = document.querySelector('.calculator')
let pb1 = document.querySelector('.pb-1')
let pb2 = document.querySelector('.pb-2')
let pb3 = document.querySelector('.pb-3')




a10.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'block';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    inp1.style.display = 'block';
    inp2.style.display = 'block';
    inp3.style.display = 'none';
    pb2.innerHTML = 'степінь';
    pb3.innerHTML = '';
    pb1.innerHTML = 'цифра';
    p3.innerHTML = '';
}
a11.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    koren.style.display = 'block';
    step.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    inp1.style.display = 'block';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    pb1.innerHTML = 'цифра';
    p3.innerHTML = '';
}
a1.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'block';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    inp1.style.display = 'block';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    pb1.innerHTML = 'Радіус';
    p3.innerHTML = '';
}
a2.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'block';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    inp1.style.display = 'block';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    pb1.innerHTML = 'Довжина сторони';
    p3.innerHTML = '';
}
a3.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'block';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    inp1.style.display = 'block';
    inp2.style.display = 'block';
    inp3.style.display = 'none';
    pb3.innerHTML = '';
    pb1.innerHTML = 'Довжина першої сторони';
    pb2.innerHTML = 'Довжина другої сторони';
    p3.innerHTML = '';
}
a4.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'block';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    inp1.style.display = 'block';
    inp2.style.display = 'none';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    pb1.innerHTML = 'Довжина грані';
    inp3.style.display = 'none';
    p3.innerHTML = '';
}
a5.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'block';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    pb1.innerHTML = '';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    inp1.style.display = 'block';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    p3.innerHTML = '';
}
a6.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'block';
    btn10.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    pb1.innerHTML = '';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    inp1.style.display = 'block';
    inp2.style.display = 'block';
    inp3.style.display = 'block';
    p3.innerHTML = '';
}
a7.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'block';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'block';
    calc.style.display = 'none';
    pb1.innerHTML = '';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    inp1.style.display = 'block';
    inp2.style.display = 'block';
    inp3.style.display = 'block';
    p3.innerHTML = '';
}
a8.onclick = () => {
    btn2.style.display = 'block';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    btn9.style.display = 'none';
    btn10.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    pb1.innerHTML = '';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    inp1.style.display = 'block';
    inp2.style.display = 'block';
    inp3.style.display = 'block';
    p3.innerHTML = '';
}
a9.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'block';
    btn9.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'none';
    pb1.innerHTML = '';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    inp1.style.display = 'block';
    inp2.style.display = 'block';
    inp3.style.display = 'block';
    p3.innerHTML = '';
}

calca.onclick = () => {
    btn2.style.display = 'none';
    btn3.style.display = 'none';
    btn4.style.display = 'none';
    btn5.style.display = 'none';
    btn6.style.display = 'none';
    btn7.style.display = 'none';
    btn8.style.display = 'none';
    koren.style.display = 'none';
    step.style.display = 'none';
    btn10.style.display = 'none';
    btn9.style.display = 'none';
    btn10Plus.style.display = 'none';
    calc.style.display = 'block';
    pb1.innerHTML = '';
    pb2.innerHTML = '';
    pb3.innerHTML = '';
    inp1.style.display = 'none';
    inp2.style.display = 'none';
    inp3.style.display = 'none';
    p3.innerHTML = '';
}