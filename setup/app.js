// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const closecontent = document.querySelector('.close')
const content = document.querySelector('.content')
const button = document.querySelector('.btn')
const hero = document.querySelector('.hero')
const container = document.querySelector('.container')

closecontent.addEventListener('click', function () {
    content.classList.remove('showmodal')
    hero.classList.remove("showgradient");
    
})
button.addEventListener('click', function () {
    content.classList.add('showmodal')
    hero.classList.add('showgradient')
})