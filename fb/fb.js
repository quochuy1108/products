document.addEventListener('DOMContentLoaded',function () {
    var anhs = document.querySelectorAll('.cacanh img')
var nenden = document.querySelector('.nenden')
var donglai = document.querySelector('.donglai')
var thongtinanh = document.querySelector('.thongtinanh')
var khoicacanh = document.querySelectorAll('.khoicacanh ul li')
var nuttrai = document.querySelector('.khoicacnut .btnleft')
var nutphai = document.querySelector('.khoicacnut .btnright')
var chisohientai = 0;
var dodaislide = khoicacanh.length



// click
nenden.addEventListener('click',function(){
    nenden.classList.remove('ra')
    thongtinanh.classList.remove('ra')
    var anhActive = document.querySelector('.thongtintrai .khoicacanh ul li.active')
    anhActive.classList.remove('active')

})
for (let i = 0; i < anhs.length; i++) {
    anhs[i].addEventListener('click',function(){
        nenden.classList.add('ra')
        thongtinanh.classList.add('ra')
        var anhduocclick = this
        for ( chiso = 0; anhduocclick = anhduocclick.previousElementSibling; chiso++) {  }
        console.log(chiso);
        
        chisohientai = chiso
        khoicacanh[chiso].classList.add('active')
 
    }) 
}
// chuyenslide
var nutbenphai = function(){
    
    
    var phantuhientai = khoicacanh[chisohientai]
   
    
    // if(chisohientai < dodaislide - 1){
    //     chisohientai++
    // }
    // else{
    //     chisohientai = 0
    // }
    chisohientai = (chisohientai < dodaislide - 1)?( chisohientai + 1) : 0
    var phantutieptheo = khoicacanh[chisohientai]
   
  
// Chuyendong
    phantuhientai.classList.remove('active')
    phantutieptheo.classList.add('active')
  

}

nutphai.addEventListener('click',nutbenphai)
// nuttrai
nutbentrai = function(){
    var phantuhientai = khoicacanh[chisohientai]
    if(chisohientai > 0){
        chisohientai --
    }
    else{
        chisohientai = dodaislide - 1
    }
    var phantutieptheo = khoicacanh[chisohientai]

   
// chuyendong
    phantuhientai.classList.remove('active')
    phantutieptheo.classList.add('active')
    
}
nuttrai.addEventListener('click',nutbentrai)
    
})
