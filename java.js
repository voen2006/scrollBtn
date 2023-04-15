const topBtn = document.querySelector('#top-btn');
document.addEventListener('scroll', function () {
    if(scrollY > window.innerHeight){
        topBtn.style.opacity = '1';
        topBtn.style.display = 'block';

    }
     else{
        topBtn.style.opacity = '0';
        topBtn.style.display = 'none';
    }
})