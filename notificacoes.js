var menu = document.getElementById('botao-open')
var container = document.querySelector('.container-icones')
var notif = document.querySelector('.icon-notif')

menu.onclick = e => {
    if(!container.classList.contains('oculto')|| !notif.classList.contains('oculto')){
       container.classList.add('oculto')
       notif.classList.add('oculto')
       comercialOpen.classList.remove('oculto')
       icone.setAttribute('src', 'assets/images/icons/cooperation-cinza.png');
       paragrafo.style.color = '#3f4755'
       seta.setAttribute('src', 'assets/images/icons/seta-para-baixo.png')
    } else {
        container.classList.remove('oculto')
        notif.classList.remove('oculto')
        
    }
}


var botaoComercial = document.querySelector('#comercial')
var comercialOpen = document.querySelector('.comercial-open')
var icone = document.querySelector('#icon-comercial')
var paragrafo = document.querySelector('.p-comercial')
var seta = document.querySelector('.seta-comercial')

botaoComercial.onclick = e => {
    if(!comercialOpen.classList.contains('oculto')){
       comercialOpen.classList.add('oculto')
       icone.setAttribute('src', 'assets/images/icons/cooperation.png');
       paragrafo.style.color = '#11cc59'
       seta.setAttribute('src', 'assets/images/icons/seta-para-cima-verde.png')

       
    } else {
        comercialOpen.classList.remove('oculto')
        icone.setAttribute('src', 'assets/images/icons/cooperation-cinza.png');
        paragrafo.style.color = '#3f4755'
        seta.setAttribute('src', 'assets/images/icons/seta-para-baixo.png')
    }
};



/* botaoComercial.onclick = {

    function(){
    $('.comercialOpen').toggleClass('mostra');
}
} */


