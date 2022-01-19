// $(function () {
//     $('header nav ul li a').click(function (e) { 
//         e.preventDefault();
//         var danhmuc = $(this).data('class')
//         console.log(danhmuc);
//         var ten = $(this).text()
//         $('h1').text(ten)
        
//         $('.container ul li').each(function(){
//             if($(this).hasClass(danhmuc)){
//                 $(this).show(300);
//             }
//             else{
//                 $(this).hide(300)
//             }
//         })

        
        
//     });
// });
$(function () {
    $('.container ul').isotope({
        itemSelector:'li'
    })
    // code cho quicksearch
    $('.tukhoa').keypress(function(){
        if(event.keyCode == 13){
            var tukho = $('.tukhoa').val()
            tukho = '.' + tukho
            $('.container ul ').isotope({filter:tukho})
            console.log(tukho);
            
        }
     
       
    })

    $('nav ul li a').click(function (e) { 
        e.preventDefault();
        var danhmuc = $(this).data('class')
        var ten = $(this).text()
        console.log(danhmuc);
        console.log(ten);
        $('h1').text(ten)
        if(danhmuc == 'all'){
            $('.container ul ').isotope({filter:'*'})
        }
        else{
            $('.container ul ').isotope({filter:danhmuc})}
        });
        
        
});
