var menu = document.getElementById('botao-open')
var container = document.querySelector('.container-icones')
var notif = document.querySelector('.icon-notif')

menu.onclick = e => {
    if(!container.classList.contains('oculto')|| !notif.classList.contains('oculto')){
       container.classList.add('oculto')
       notif.classList.add('oculto')
    } else {
        container.classList.remove('oculto')
        notif.classList.remove('oculto')
    }
}
