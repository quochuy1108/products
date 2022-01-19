document.addEventListener('DOMContentLoaded',function () {
    var menudo = document.querySelector('.menu');
    var trangthaimenudo = '<100';
    var mid = document.querySelector('.mid')
    var vtmid = mid.offsetTop + 275;
    var trangthaimid = '<mid'
    var kc = mid.offsetTop + 250 + 1000;
    // hieu ung load
    var s2 =document.querySelector('.s2');
    var kcs2 = s2.offsetTop - 100 ; 
    trangthais2 = '<498'
    // hieu ung load2
    var s3 = document.querySelector('.s3');
    var kcs3 = s3.offsetTop - 100;
    trangthais3 = '<1658'
    
    
    window.addEventListener('scroll',function () {
        console.log(window.pageYOffset);
        if(window.pageYOffset > 100){
            if(trangthaimenudo =='<100'){
                trangthaimenudo ='>100';
                menudo.classList.add('menuden')
                
            }
        }
        else if(window.pageYOffset <= 100){
            if(trangthaimenudo =='>100'){
                trangthaimenudo = '<100';
                menudo.classList.remove('menuden')
            }
        }
        if((window.pageYOffset > vtmid) && (window.pageYOffset < kc)){
            if(trangthaimid =='<mid'){
                trangthaimid = '>mid'
                mid.classList.add('hienthi')
            }
        }
        else if((window.pageYOffset < vtmid) || (window.pageYOffset > kc)) {
            if(trangthaimid =='>mid'){
                trangthaimid ='<mid';
                mid.classList.remove('hienthi');
              
            }
        }
        if(window.pageYOffset > kcs3){
            if(trangthais3 =='<1658'){
                trangthais3 ='>1658';
                s3.classList.add('cd')
                
            }
        }
        if(window.pageYOffset > kcs2){
            if(trangthais2 =='<498'){
                trangthais2 ='>498';
                s2.classList.add('cd2')
                
            }
        }
      })
  })