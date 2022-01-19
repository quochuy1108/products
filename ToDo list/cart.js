let form = document.getElementById('form');
let lists = document.getElementById('lists');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = form.data.value.trim();
    lists.appendChild(li)
    if (form.data.value.trim() == '') {
        return
    }
    let button = document.createElement('button');
    button.innerHTML = 'X';
    button.style.fontSize = '24px'
    button.onclick = function (e) {
        e.target.parentNode.remove()
    }
    li.onclick = function () {
        li.classList.toggle('changeColor')
    }
    li.appendChild(button)
    form.data.value = ''
})






