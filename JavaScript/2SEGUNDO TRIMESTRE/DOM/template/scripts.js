//Visualizar o contúdo do document
//console.log(document)
//como obter o title da página
//console.log(document.title)

//Como acessar um elemento pelo ID(SELETOR ID)
//const guest = document.getElementById('guest-2')
//console.log(guest)

//Como visualizar as propriedades de um objeto
//console.dir(guest)

//Como acessar um elemento com classe (SELETOR CLASS)
//const guestByClass = document.getElementsByClassName('guest')
//console.log(guestByClass)

//como acessar o primeiro elemento da coleção
//console.log(guestByClass[0])
//outro jeito
//console.log(guestByClass.item(0))

//Selecionar uma lista de elementos pela tag (SELETOR TAG)
//const guestsByTag = document.getElementsByTagName('li')
//console.log(guestsByTag)

//****************************************   */

//QUERY SELECTOR
//Acessa o elemento pelo selector ID
//const guest = document.querySelector('#guest-1') //Conlocando # indica que eu quero selecionar um elemento por id
//console.log(guest)

//Acessar o elemento pelo selector CLASS
//const guests = document.querySelector('.guest') //Colocando . indica que eu quero selecionar um elemento por class
//console.log(guests)

//Como retornar TODOS os elementos encontrados pelo query
//const guestsAll = document.querySelectorAll('.guest')
//console.log(guestsAll)

/************************************ */
//MANIPULANDO O CONTEÚDO
//const guest = document.querySelector('#guest-1 span')
//console.log(guest)
//Como exibir o conteúdo do elemento com o texto
//console.log(guest.textContent) //Retorna o conteúdo como texto

//guest.textContent = 'ANTONIO' // Alterando o conteúdo do elemento (cuidado que isso elimina a tag span que tem dentro do li)

//para que isso não aconteça, é só adicionar um espaço span lá #guest-1, assim o conteúdo do span não é eliminado ficando assim -> "#guest-1 span"

//outras formas de acessar o conteúdo do elemento
//console.log(guest.innerText)

//console.log(guest.innerHTML) //Outra forma usando innerHTML

/************************************* */
//Manipulando estilos

//Como fazer a borda vermelha aparecer no input através do javascript
//const input = document.querySelector('#nome')
//input.classList.add('input-error') //Adiciona a classe input-error no elemento input, fazendo com que a borda vermelha apareça

//Como remover a borda vermelha do input (ou remover um classe nesse caso)
//input.classList.remove('input-error') //Remove a classe input-error do elemento input, fazendo com que a borda vermelha desapareça

//Propriedade que adiciona a classe se ela não existir e remove se ela existir. TOGGLE
//nput.classList.toggle('input-error')

//Posso também utilizr um elemento direto alterando as propriedades de estilo css do elemento
//const button = document.querySelector('button')
//utton.style.backgroundColor = 'red' //Alterando a cor do background do botão para vermelho

/********************************************************************** */
//CRIANDO ELEMENTOS
const guests = document.querySelector('ul')
console.log(guests) //Isso só foi usado para mostrar a ul, mas o objetivo é criar um elemento li dentro da ul

//Criando um elemento li
const newGuest = document.createElement('li')
newGuest.classList.add('guest') //Adicionando a classe guest no elemento li criado

const guestName = document.createElement('span') //Criando um elemento span para colocar o nome do convidado dentro do li

guestName.textContent = 'ANTONIETA' //Adicionnando o nome do convidado no span

const guestSurname = document.createElement('span') //Criando um elemento span para colocar o sobrenome do convidado no li

guestSurname.textContent = 'SILVA' //Adicionando o sobrenome dentro do li

newGuest.appendChild(guestName) //Adicionando o span do nome dentro do li
newGuest.prepend(guestSurname)
console.log(newGuest) //Isso mostra o li com o span dentro, mas ainda não tem o sobrenome

guests.appendChild(newGuest) //Adicionando na tela o novo elemento.
