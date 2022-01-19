document.addEventListener('DOMContentLoaded',function(){
    const menu = document.querySelector('.menu');
    const vitriMenu = menu.offsetTop +20;
    const vitriCuoiMenu = menu.offsetTop + 20 + 400;
    console.log(vitriCuoiMenu);
    var status = '>100';
    const h1 = document.querySelector('.chuTo');
    const vitri = h1.offsetTop - 320;
    var sttVitri = '>180';
    window.addEventListener('scroll',function(){
        if((window.pageYOffset > vitriMenu) && (window.pageYOffset < vitriCuoiMenu)){
            if(status == '>100'){
                console.log('>100');

                menu.classList.add('black');
                status = '<100'
            }
                   }

     
        else if(window.pageYOffset < vitriMenu || window.pageYOffset > vitriCuoiMenu){
            if(status == '<100'){
                console.log('<100');

                menu.classList.remove('black');
                status = '>100'
            }
        }

        if(window.pageYOffset > vitri){
            if(sttVitri == '>180'){
                console.log('>180');
                sttVitri = '<180'
                h1.classList.add('toHon');

            }
        else if(window.pageYOffset <= vitri || window.pageYOffset < 200){
            console.log('<180');
            if(sttVitri == '<180'){
                h1.classList.remove('toHon');
                sttVitri = '>180'
            }
        }
        }
    })
    
})