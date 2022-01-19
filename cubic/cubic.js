document.addEventListener('DOMContentLoaded',function () {
    var khoi = document.querySelector('.khoi');
    // console.log(khoi);
    var btn = document.getElementsByClassName('btn');
    // console.log(btn);      
    
  btn[0].onclick = function () {
      khoi.classList.add('so1');
      khoi.classList.remove('so2','so3','so4','so5','so6');
  }
  btn[1].onclick = function () {
      khoi.classList.add('so2');
      khoi.classList.remove('so1','so3','so4','so5','so6');
    }
  btn[2].onclick = function () {
      khoi.classList.add('so3');
      khoi.classList.remove('so2','so1','so4','so5','so6');
    }
  btn[3].onclick = function () {
      khoi.classList.add('so4');
      khoi.classList.remove('so2','so3','so1','so5','so6');
    }
  btn[4].onclick = function () {
      khoi.classList.add('so5');
      khoi.classList.remove('so2','so3','so4','so1','so6');
    }
  btn[5].onclick = function () {
      khoi.classList.add('so6');
      khoi.classList.remove('so2','so3','so4','so5','so1');
    }
 
    
  })