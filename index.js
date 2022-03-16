const botaoMenu = document.querySelector('.cabecalhoMenu')
const menu = document.querySelector('.menuLateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menuLateralAtivo')
})