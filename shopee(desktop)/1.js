var register = document.querySelector('#register')
var login = document.querySelector('#log-in')
var modal__register = document.querySelector('.modall.register')
var modal__login = document.querySelector('.modall.log-in')
var overlay = document.querySelectorAll('.modall__overlay')
var register_login = document.querySelector('#register-login')
var login_register = document.querySelector('#login-register')
var modal__register__body = document.querySelectorAll('.modall__body')[0]
var modal__login__body = document.querySelectorAll('.modall__body')[1]
var btn_back = document.querySelectorAll('button.btn.btn--transparent')

console.log(register);
console.log(register_login);

for (let i = 0; i < btn_back.length; i++) {
    btn_back[i].onclick = function () {
        modal__register.classList.remove('hienlen');
        modal__login.classList.remove('hienlen');

    }
}

register.onclick = function () {
    modal__register.classList.add('hienlen');
    modal__register__body.style.animation = "scale ease-out 0.3s"

}

login.onclick = function () {
    modal__login.classList.add('hienlen')
    modal__login__body.style.animation = "scale ease-out 0.3s"
}

for (let i = 0; i < overlay.length; i++) {
    overlay[i].onclick = function () {
        modal__register.classList.remove('hienlen');
        modal__login.classList.remove('hienlen');
        modal__register__body.style.removeProperty('animation');
        modal__login__body.style.removeProperty('animation');
    }

}
register_login.onclick = function () {
    modal__register.classList.remove('hienlen');
    modal__login.classList.add('hienlen');
    modal__register__body.style.removeProperty('animation');
    modal__login__body.style.animation = "scale ease-out 0.3s"
}

login_register.onclick = function () {
    modal__login.classList.remove('hienlen');
    modal__register.classList.add('hienlen');
    modal__login__body.style.removeProperty('animation');
    modal__register__body.style.animation = "scale ease-out 0.3s"

}

document.addEventListener("click", (e) => {
    var input_search_history = document.querySelector('.header__search-history')
    var input_search = document.querySelector('.header__search-input')
    let targetElement = e.target;
    if (targetElement == input_search) {
        // This is a click inside. Do nothing, just return.
        input_search_history.style.display = 'block';
        return

    }
    else {
        input_search_history.style.removeProperty('display');
    }
});



