const bt = document.getElementById('a1');
const bt2 = document.getElementById('a2');
const bt3 = document.getElementById('a3');

const img = document.querySelector('.img');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

const psImg = img.offsetTop
const psImg2 = img2.offsetTop
const psImg3 = img3.offsetTop




bt.onclick = function(){
    window.scrollTo({
        top:psImg,
        behavior:"smooth"
    })
}
bt2.onclick = function(){
    window.scrollTo({
        top:psImg2,
        behavior:"smooth"
    })
}
bt3.onclick = function(){
    window.scrollTo({
        top:psImg3,
        behavior:"smooth"
    })
}

let age = 25;
let mature = (age >= 18) ? true : false;
console.log(mature);
