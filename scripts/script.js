const closenav = document.getElementById('closeNav')
const opennav = document.getElementById('openNav')
const linksmenu = document.getElementById('linksmenu')
const vanishsound = new Audio('./audio/vanish.mp3')
const contactl1 = document.getElementById('contactl1')
const contactl2 = document.getElementById('contactl2')
const contactl3 = document.getElementById('contactl3')
const contactl4 = document.getElementById('contactl4')
const contactl5 = document.getElementById('contactl5')
const formsubmitbtn = document.getElementById('formsubmitbtn')

opennav.addEventListener('click',()=>{
    linksmenu.classList.add('activenav')
})

closenav.addEventListener('click',()=>{
    linksmenu.classList.remove('activenav')
})

function contactl1vanish() {
    vanishsound.play()
    contactl1.style.display = 'none'
}
function contactl2vanish() {
    vanishsound.play()
    contactl2.style.display = 'none'
}
function contactl3vanish() {
    vanishsound.play()
    contactl3.style.display = 'none'
}
function opendclink() {
    window.open('https://discord.com/users/718798893445283863')
}
function opengitlink() {
    window.open('https://github.com/rizayldrm')
}
function icantbackend() {
    formsubmitbtn.innerHTML = 'Hala veritabanı kuramıyom 😭'
}