const check = document.getElementById('check');
const btn = document.getElementById('btn');
const message = document.getElementById('message');


btn.addEventListener('click', function(){
    btn.classList.add('hide');
    check.classList.add('rotateIn');
    message.classList.add('fadeIn');
});