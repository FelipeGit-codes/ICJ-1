//DOM
const capa = document.querySelector('#capa')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

//Eventos
bt1.addEventListener('click',Showa )
bt2.addEventListener('click',GodII )
bt3.addEventListener('click',Shin)
bt4.addEventListener('click',Minus )

//Ação

function Showa(){
    capa.src = 'images/showa.jpg'
    sinopse.textContent = 'O Godzilla da Era Shōwa (1954–1975) acompanha a evolução do monstro ao longo de 15 filmes. A saga começa com um Godzilla gigante despertado por testes nucleares, agindo como uma força destrutiva e uma metáfora sombria do trauma atômico sobre o Japão. Com o tempo, a criatura deixa de ser um vilão e passa a atuar como um anti-herói territorial, enfrentando rivais lendários como King Kong e Mothra. Eventualmente, Godzilla assume o papel definitivo de defensor da Terra, unindo forças com outros monstros aliados para proteger a humanidade contra ameaças alienígenas colossais, como King Ghidorah e Mechagodzilla.'
}

function GodII(){
    capa.src = 'images/god2.webp'
    sinopse.textContent = 'Godzilla II: Rei dos Monstros (2019) acompanha a agência Monarch tentando conter uma catástrofe global após ecoterroristas libertarem King Ghidorah, um dragão alienígena de três cabeças. Ao despertar outros Titãs destruidores como Rodan, Ghidorah assume o controle dos monstros e ameaça extinguir a humanidade. Para salvar o planeta, os humanos precisam ajudar o enfraquecido Godzilla a recuperar suas forças e, com a ajuda da majestosa Mothra, derrotar o rival em uma batalha épica pelo trono de verdadeiro Rei dos Monstros.'
}

function Shin(){
    capa.src = 'images/shin.jpg'
    sinopse.textContent = 'O filme acompanha o surgimento repentino de uma criatura marinha grotesca que invade Tóquio, evoluindo e crescendo rapidamente a cada minuto. O governo japonês é paralisado pela própria burocracia e ineficiência, demorando a reagir enquanto o monstro se transforma no colossal Shin Godzilla, uma força da natureza mutante que emite radiação pura e destrói cidades inteiras com raios atômicos. Diante do fracasso das forças armadas tradicionais e da ameaça de uma intervenção nuclear dos Estados Unidos, uma força-tarefa de jovens cientistas e políticos burocratas precisa correr contra o tempo para decodificar a biologia do monstro e encontrar uma forma científica de congelá-lo antes que o Japão seja completamente devastado.'
}

function Minus(){
    capa.src = 'images/one.webp'
    sinopse.textContent = 'Ambientado logo após o fim da Segunda Guerra Mundial, o filme acompanha Kōichi Shikishima, um piloto kamikaze traumatizado que sobreviveu a um ataque inicial do monstro na Ilha Odo. Enquanto tenta reconstruir sua vida ao lado de uma jovem órfã em um Japão já devastado e zerado pela guerra, o monstro sofre mutações devido aos testes nucleares americanos no Atol de Bikini, tornando-se o gigantesco e implacável Godzilla. Quando a criatura ataca uma Tóquio indefesa, o país é levado a um estado "abaixo de zero" (Minus One). Sem o apoio do exército ou de forças estrangeiras, um grupo de veteranos de guerra e civis traumatizados precisa se unir para bolar um plano desesperado e destruir o monstro usando engenharia e pura coragem.'
}