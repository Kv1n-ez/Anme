let btnb = document.querySelector('.btnb');
let btnc = document.querySelector('.btnc');
let buscador = document.querySelector('.buscador');
let barra_nav = document.querySelector('.barra_nav');
let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
let refreshInterval = setInterval(() => {
  next.click();
}, 5000)
function showSlider(){
  let itemActiveOld = document.querySelector('.slider .list .item.active');
  let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
  itemActiveOld.classList.remove('active');
  thumbnailActiveOld.classList.remove('active');
  items[itemActive].classList.add('active');
  thumbnails[itemActive].classList.add('active');

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
      next.click();
  }, 5000)
}
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
      itemActive = index;
      showSlider();
  })
})

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