let form = window.document.getElementById('form')

let textForm = document.getElementById('textForm')

let expEmail = 'julia@hotmail.com'
let expSenha = 1234



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let email = window.document.getElementById('txtemail').value
    let senha = window.document.getElementById('txtsenha').value

    verificar(email, senha)
})


function verificar(email, senha) {
    console.log(email, senha)
    if (email == '' || senha == '') {
        console.log('entrou1')
        textForm.textContent = 'Preencha todos os campos!'
    }

    else if (email != expEmail || senha != expSenha) {
        console.log('entrou2')
        window.alert('[ERRO] Email ou senha incorretos! Verifique e tente novamente!')

    } else {
        console.log('entrou3')
        window.location.href = 'notificacoes.html'
    }
}