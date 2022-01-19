var logo = document.querySelector('.logo')
var menu = document.querySelector('.navbar')

window.addEventListener('scroll',function(){
   if(window.pageYOffset > 200){
       menu.classList.add('white')
       menu.classList.remove('navbar-dark')
       menu.classList.add('navbar-light')
       logo.classList.add('orange')
   }
    else if(window.pageYOffset < 200){
        menu.classList.remove('white')
        menu.classList.add('navbar-dark')
        menu.classList.remove('navbar-light')
        logo.classList.remove('orange')
    }
})
