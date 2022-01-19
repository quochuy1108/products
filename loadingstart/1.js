$(function () {
  hieuungload =new TimelineMax({onComplete:noidungvaodi})
    hieuungload
    .from($('.loading'),2,{opacity:0})
    .from($('.hieuung'),1,{opacity:0,scale:2,ease: "elastic.out(1.2, 0.3)"},)
    // ketthuc
    .to($('.loading'),1,{x:-3000})
    function noidungvaodi(){
        noidung.resume()
    }
// hieuungnoidung
    hieuungnoidung = new TimelineMax({paused:true})
    hieuungnoidung
    .from($('.chuto'),1,{y:200,opacity:0})
    .from($('.chunho'),1,{x:200,opacity:0})

    function noidungvaodi(){
        hieuungnoidung.resume()
    }
});