//DOM

const btalvo = document.querySelector('#alvo')
const btbahia = document.querySelector('#bt1')
const btvitoria = document.querySelector('#bt2')
const btroma = document.querySelector('#bt3')
const btmadrid = document.querySelector('#bt4')
const btarsenal = document.querySelector('#bt5')

//EVENTOS

btbahia.addEventListener('click', bahia)
btvitoria.addEventListener('click', vitoria)
btroma.addEventListener('click', roma)
btmadrid.addEventListener('click', madrid)
btarsenal.addEventListener('click', arsenal)

//ação

function bahia(){
    alvo.src = 'img/bahia.jpg'
}
function vitoria(){
    alvo.src = 'img/vitoria.jpg'
}
function roma(){
    alvo.src = 'img/roma.jpg'
}
function madrid(){
    alvo.src = 'img/madrid.jpg'
}
function arsenal(){
    alvo.src = 'img/arsenal.jpg'
}