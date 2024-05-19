let btnb = document.querySelector('.btnb');
let btnc = document.querySelector('.btnc');
let buscador = document.querySelector('.buscador');
let barra_nav = document.querySelector('.barra_nav');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let items = document.querySelectorAll('.slider .list .item');

btnb.onclick = function(){
    buscador.classList.add('active');
    btnc.classList.add('active');
    btnb.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open')
}
btnc.onclick = function(){
    buscador.classList.remove('active');
    btnc.classList.remove('active');
    btnb.classList.remove('active');
    menuToggle.classList.remove('hide');
}
menuToggle.onclick = function(){
    header.classList.toggle('open')
    btnc.classList.remove('active');
    btnb.classList.remove('active');
    menuToggle.classList.remove('hide');
}