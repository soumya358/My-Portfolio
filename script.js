const homebtn = document.getElementById('homebtn')
const aboutbtn = document.getElementById('aboutbtn')
const contactbtn = document.getElementById('contactbtn')
const skillbtn = document.getElementById('skillbtn')
const home = document.getElementById('home')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const skill = document.getElementById('skill')
homebtn.addEventListener('click',function(){
    home.style.display = 'flex'
    about.style.display = 'none'
    contact.style.display = 'none'
    skill.style.display = 'none'
})
aboutbtn.addEventListener('click',function(){
    home.style.display = 'none'
    about.style.display = 'flex'
    contact.style.display = 'none'
    skill.style.display = 'none' 
})
contactbtn.addEventListener('click',function(){
    home.style.display = 'none'
    about.style.display = 'none'
    contact.style.display = 'flex'
    skill.style.display = 'none'
})
skillbtn.addEventListener('click',function(){
    home.style.display = 'none'
    about.style.display = 'none'
    contact.style.display = 'none'
    skill.style.display = 'flex'
})
