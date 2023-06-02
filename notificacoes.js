/* ---------------------BOTÃO MENU LATERAL--------------------- */

var menu = document.getElementById('botao-open')
var container = document.querySelector('.container-icones')
var notif = document.querySelector('.icon-notif')

menu.onclick = e => {
    if (container.classList.contains('oculto') || notif.classList.contains('oculto')) {
        container.classList.remove('oculto')
        notif.classList.remove('oculto')
        comercialOpen.classList.remove('oculto')
        icone.setAttribute('src', 'assets/images/icons/cooperation-cinza.png');
        paragrafo.style.color = '#4a4a4a'
        seta.setAttribute('src', 'assets/images/icons/seta-para-baixo.png')
    }

    else if (!container.classList.contains('oculto') || !notif.classList.contains('oculto')) {
        container.classList.add('oculto')
        notif.classList.add('oculto')
    }

    else {
        container.classList.add('oculto')
        notif.classList.add('oculto')

    }
};

/* ---------------------BOTÃO COMERCIAL - MENU LATERAL--------------------- */

var botaoComercial = document.querySelector('#comercial')
var comercialOpen = document.querySelector('.comercial-open')
var icone = document.querySelector('#icon-comercial')
var paragrafo = document.querySelector('.p-comercial')
var seta = document.querySelector('.seta-comercial')

botaoComercial.onclick = e => {
    if (!comercialOpen.classList.contains('oculto')) {
        comercialOpen.classList.add('oculto')
        icone.setAttribute('src', 'assets/images/icons/cooperation.png');
        paragrafo.style.color = '#11cc59'
        seta.setAttribute('src', 'assets/images/icons/seta-para-cima-verde.png')


    } else {
        comercialOpen.classList.remove('oculto')
        icone.setAttribute('src', 'assets/images/icons/cooperation-cinza.png');
        paragrafo.style.color = '#4a4a4a'
        seta.setAttribute('src', 'assets/images/icons/seta-para-baixo.png')
    }
};

/* ---------------------BOTÃO ADICIONAR NOTIFICAÇÃO--------------------- */

var add = document.querySelector('#icone-add')
var popup = document.querySelector('.popup')

var containerIcones = document.querySelector('.container-icones')
var topo = document.querySelector('.topo')
var tabela = document.querySelector('.tabela')
var textRodape = document.querySelector('.textRodape')


add.onclick = e => {
    if (popup.classList.contains('oculto')) {
        popup.style.animation = 'animacao 1s forwards'
        popup.classList.remove('oculto')
        popup.style.display = 'block'
        containerIcones.style.opacity = '.7'
        topo.style.opacity = '.7'
        tabela.style.opacity = '.7'
        textRodape.style.opacity = '.7'
        filtro.classList.add('oculto')
        filtro.style.display = 'none'
        iconeFilter.setAttribute('src', 'assets/images/icons/filter_vazio.png');
        filter.style.background = 'white'
    }
}

/* ---------------------BOTÃO CANCELAR - ADICIONAR NOTIFICAÇÃO--------------------- */

var cancelar = document.querySelector('.botao-cancelar')

cancelar.onclick = e => {
    popup.style.animation = 'fechar 1s forwards'
    popup.classList.add('oculto')
    /* page.style.opacity = '1' */
    containerIcones.style.opacity = '1'
    topo.style.opacity = '1'
    tabela.style.opacity = '1'
    textRodape.style.opacity = '1'

}

/* ---------------------BOTÃO SALVAR - ADICIONAR NOTIFICAÇÃO--------------------- */

var salvar = document.querySelector('.botao-salvar')

salvar.onclick = e => {
    popup.style.animation = 'fechar 1s forwards'
    popup.classList.add('oculto')
    /* page.style.opacity = '1' */
    containerIcones.style.opacity = '1'
    topo.style.opacity = '1'
    tabela.style.opacity = '1'
    textRodape.style.opacity = '1'
}

/* ---------------------BOTÃO FILTRAR NOTIFICAÇÃO--------------------- */

var filter = document.querySelector('#icone-filter')
var filtro = document.querySelector('.filtro-container')
var iconeFilter = document.querySelector('.icon-filter')

filter.onclick = e => {
    if (filtro.classList.contains('oculto')) {
        filtro.classList.remove('oculto')
        filtro.style.display = 'block'
        filter.style.background = '#11cc59'
        iconeFilter.setAttribute('src', 'assets/images/icons/filter-branco.png');
    }
}

/* ---------------------BOTÃO LIMPAR - FILTRAR NOTIFICAÇÃO--------------------- */

var limpar = document.querySelector('#botao-limpar')

limpar.onclick = e => {
    filtro.classList.add('oculto')
    filtro.style.display = 'none'
    iconeFilter.setAttribute('src', 'assets/images/icons/filter_vazio.png');
    filter.style.background = 'white'
}

/* ---------------------BOTÃO FILTRAR - FILTRAR NOTIFICAÇÃO--------------------- */

var filtrar = document.querySelector('#botao-filtrar')

filtrar.onclick = e => {
    filtro.classList.add('oculto')
    filtro.style.display = 'none'
    iconeFilter.setAttribute('src', 'assets/images/icons/filter_vazio.png');
    filter.style.background = 'white'
}




