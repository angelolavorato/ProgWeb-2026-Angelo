//Arrow Function (função de seta)
const showMessage = () => {
  console.log('Alo mundo')
}

console.log(showMessage) //mostra a função
showMessage() //chama a função

const showMessage2 = (username, email) => {
  console.log('olá ' + username, 'seu email é: ', email)
}

showMessage2('Maria', 'maria@email.com') //chama a função e passa os parametros
