const sideBar = document.querySelector('#sidebar')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')

menuBtn.addEventListener('click', openNav)
closeBtn.addEventListener('click', closeNav)

sideBar.addEventListener('click', (e) => {
   return (e.target.hasAttributes('href')) ? closeNav() : '' 
})

function closeNav(){
    sideBar.classList.remove('active')
    sideBar.classList.add('inactive')
    sideBar.style.transform = 'translateX(100%)'
}

function openNav(){
    sideBar.classList.add('active')
    sideBar.classList.remove('inactive')
    sideBar.style.transform = 'translateX(0)'
}