const closenav = document.getElementById('closeNav')
const opennav = document.getElementById('openNav')
const linksmenu = document.getElementById('linksmenu')

opennav.addEventListener('click',()=>{
    linksmenu.classList.add('activenav')
})

closenav.addEventListener('click',()=>{
    linksmenu.classList.remove('activenav')
})