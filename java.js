const topBtn = document.querySelector('#top-btn');
document.addEventListener('scroll', function () {
    if (scrollY > window.innerHeight) {
        topBtn.style.opacity = '1';
        topBtn.style.display = 'block';

    }
    else {
        topBtn.style.opacity = '0';
        topBtn.style.display = 'none';
    }
})

const socioDiv = document.querySelector('.socio-div')
const socioBtn = document.querySelector('.socio-btn')

let timerWindow = setTimeout(() => {
    socioDiv.style.transform = 'translateY(100%)';
}, 1000)

socioBtn.onclick = function () {
    socioDiv.style.transform = 'translateY(-100%)';
}



