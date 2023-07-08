const hamburger = document.querySelector('.hamburger')
const nav2 = document.querySelector('.nav2')
const close = document.querySelector('.close')

hamburger.addEventListener ('click', ()=> {
hamburger.classList.add('hide');
close.classList.add('hide');
nav2.classList.toggle('visible');
})

close.addEventListener ('click', ()=> {
    hamburger.classList.remove('hide');
    close.classList.add('hide');
    nav2.classList.toggle('visible');
})