let form = document.getElementById('form')
let textForm = document.getElementById('textForm')

let expEmail = 'julia@hotmail.com'
let expSenha = '1234'

    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        let email = window.document.getElementById('txtemail').value
        let senha = String(window.document.getElementById('txtsenha').value)
    
        verificar(email, senha)
    })

function verificar(email, senha) {
    if (email == '' || senha == '') {
        textForm.textContent = 'Preencha todos os campos!'
    }
    
    else if (email != expEmail || senha != expSenha) {
        window.alert('[ERRO] Email ou senha incorretos! Verifique e tente novamente!')

    } else {
        window.location.href = 'notificacoes.html'
    }
}
