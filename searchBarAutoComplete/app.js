let suggestions = [
    "a",
    "ab",
    "abc",
    "aasd",
    "aqwe",
    "a123",
    "a^$^",
    "adu",
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

const searchWrapper = document.querySelector('.search-input');
const input = document.querySelector('input');
const box = document.querySelector('.box');

// if user press any key
input.onkeyup = () => {
    let userData = input.value;
    let emptyArray = [];

    if (userData) {
        emptyArray = suggestions.filter((data) => data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()))
        emptyArray = emptyArray.map((data) => data = `<li>${data}</li>`)
        // console.log(emptyArray);
        searchWrapper.classList.add('active')
        render(emptyArray)

        let allList = document.querySelectorAll('li');
        for (let i = 0; i < allList.length; i++) {
            // console.log(allList[i]);
            allList[i].onclick = function () {
                selectUserData = this.textContent;
                input.value = selectUserData;
                searchWrapper.classList.remove('active')

            }
        }
    }
    else {
        searchWrapper.classList.remove('active')
    }

}

// function select(e) {
//     let selectUserData = e.textContent;
//     console.log(selectUserData);
//     input.value = selectUserData;
// }

function render(list) {
    let listData;
    // console.log(list.length);
    if (!list.length) {
        userValue = input.value;
        listData = `<li>${userValue}</li>`
    } else {
        listData = list.join('')
    }
    box.innerHTML = listData
}