var menu = document.querySelector('.navbar')
var logo = document.querySelector('.logo')
var nutlen = document.getElementsByClassName('nutlen')
console.log(nutlen);
var nd2= document.querySelector('.nd2')
console.log(nd2);



window.addEventListener('scroll',function(){
    if(window.pageYOffset > 50){
        menu.classList.remove('navbar-dark')
        logo.classList.add('orange')
        if(window.pageYOffset > 500){
            nutlen[0].classList.add('hienthi')
        }
       
    }
    else{
        menu.classList.add('navbar-dark')
        logo.classList.remove('orange')
        nutlen[0].classList.remove('hienthi')
    }
})
nutlen[0].addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
})


