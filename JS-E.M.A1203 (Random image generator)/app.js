var theImages = [
    {
        src: 'https://kenh14cdn.com/zoom/460_289/203336854389633024/2021/6/22/photo1624329527559-1624329527711860203535.jpg',
        width: "300",
        height: "300",
    },
    {
        src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/6/22/photo1624338912057-16243389122601141799156.jpg',
        width: "300",
        height: "300",
    },
    {
        src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/6/22/photo1624347943289-16243479434611079073956.png',
        width: "300",
        height: "300",
    },
    {
        src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/6/22/photo1624338712379-1624338712592251114537.jpg',
        width: "300",
        height: "300",
    },
    {
        src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/6/22/photo1624339136848-1624339137075309841697.jpg',
        width: "300",
        height: "300",
    },
    {
        src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2021/6/22/photo1624324038771-1624324038970687085062.jpg',
        width: "300",
        height: "300",
    },
]



var img = document.querySelectorAll('img')
var button = document.querySelector('button')
var theImgLength = theImages.length
// console.log(theImgLength);

function randomImg(limit) {
    return Math.floor(Math.random() * limit)
}

function randomArray() {
    array = [];
    checker = {};

    for (var i = 0; i < 1;) {
        if (array.length < 3) {
            var newNumber = randomImg(theImgLength)
            if (!checker[newNumber]) {
                checker[newNumber] = true;
                array.push(newNumber)
            }
        }
        else {
            return array
        }
    }

}

// console.log(randomArray())



button.onclick = function () {
    var randomIndex = randomArray()
    img.forEach(function (value, index) {
        value.setAttribute('src', theImages[randomIndex[index]].src)
        console.log(theImages[randomIndex]);

    })

}




// function randomNumber(n) {
//     return Math.floor(Math.random() * n)
// }
// function accentArray(a) {
//     var result = [];
//     var tracker = {}

//     if (result.length < 3) {
//         for (let i = 0; i < a.length; i++) {
//             if (tracker[a[i]] !== true) {
//                 tracker[a[i]] = true;
//                 result.push(a[i])
//             }
//         }

//     }
//     return result

// }

// console.log(accentArray([4, 7, 3, 8, 2, 5, 2, 2, 3, 8]));

