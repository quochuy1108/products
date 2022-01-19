const app = document.getElementById('app')
const section = document.querySelector('section')
const openMenu = document.querySelector('.open')
const closeMenu = document.querySelector('.close')
const menuGoIn = document.querySelector('.menu__openMenu-popUp')
const blackPopup = document.querySelector('.blackPopup')

const counts = document.querySelectorAll('.count')
const counts2 = document.querySelectorAll('.numb')
console.log(counts2);
console.log(counts);

const positionCount = document.querySelector('.count').offsetTop - 120
const positionCount2 = document.querySelectorAll('.numb')[0].offsetTop
const positionCount3 = document.querySelectorAll('.numb')[1].offsetTop
const positionCount4 = document.querySelectorAll('.numb')[2].offsetTop
console.log(positionCount2);
console.log(positionCount3);
console.log(positionCount4);

const a = document.querySelectorAll('.numb')[1].innerText
console.log(a);
var exceedPositionCount = false
var menuFixed = true
const btnScrollTop = document.querySelector('.scrollTop')




// Menu popup
openMenu.addEventListener('click', function () {
    menuGoIn.classList.add('goIn')
    section.classList.add('turnLeft')
    blackPopup.style.display = 'block'

})

closeMenu.addEventListener('click', function () {
    menuGoIn.classList.remove('goIn')
    section.classList.remove('turnLeft')
    blackPopup.style.display = 'none'
})

blackPopup.onclick = function () {
    menuGoIn.classList.remove('goIn')
    section.classList.remove('turnLeft')
    blackPopup.style.display = 'none'
}

// Menu Fixed
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu')
    if (window.pageYOffset > 1) {
        if (menuFixed === true) {
            menu.classList.add('fixed')
            menuFixed = false
        }
    } else {
        menuFixed = true
        menu.classList.remove('fixed')
    }


})

// ---- Counter
const counter = (positionCount, exceedPositionCount, element) => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > positionCount) {
            if (exceedPositionCount == false) {
                element.forEach((count) => {
                    console.log(count);
                    const speed = 400
                    const updateCount = () => {
                        const target = +count.getAttribute('data-target')
                        const currentNumber = +count.innerText

                        const increment = target / speed

                        if (currentNumber < target) {
                            count.innerText = Math.ceil(currentNumber + increment)
                            setTimeout(updateCount, 8)

                        } else {
                            count.innerText = target
                        }
                    }
                    updateCount()
                })
                exceedPositionCount = true
            }
        }
    })
}

counter(positionCount, exceedPositionCount, counts)
counter(positionCount2, exceedPositionCount, counts2)


// Scroll
btnScrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

