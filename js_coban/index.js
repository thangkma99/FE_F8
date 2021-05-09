// let array = [1,2,3];
// let arrayLength = array.length;
// for (let i = 0; i < arrayLength; i++) {
//     console.log(array[i]);
// }
// var myInfo = [
//     "Thang",
//      18,
//      "HANOI"
// ]
// for (var key in myInfo) {
//     console.log(key);
// }
// var language = [
//     'java',
//     'oop',
//     'php'
// ]
// for (var value of language) {
//     console.log(value)
// }
// var i = 0;
// while (i <= 100) {
    
//     console.log(i);
//     i++;
// }

// while (i < language.length) {
    
//     console.log(language[i]);
//     i++;
// }
// var i = 0;
// var isSuccess = false;
// do {
//     i++;
//     console.log("Nap the lan " + i);
//     if (false) {
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3);
// for ( var i = 0; i < 10; i++) {
//     console.log(i)
//     if (i >=5) {
//         break;
//     }
// }
// var myArr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i = 0; i < myArr.length; i++) {
//     for (var j = 0; j < myArr[i].length; j++) {
//         console.log(myArr[i][j])
//     }
// }
// for
// var course = [
//     {
//         id: 1,
//         name: 'Java',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'ReactJs',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 0
//     }
// ]
// var isFree = course.every(function(khoaHoc, index) {
//     return course.coin === 0;
// });
// console.log(isFree);
// var isFree = course.find(function(khoaHoc, index) {
//     return course.coin === 0;
// });
// console.log(isFree);
// var isFree = course.some(function(khoaHoc, index) {
//     return course.coin === 0;
// });
// console.log(isFree);

// course.forEach(function(khoaHoc, index) {
//     console.log(index, khoaHoc)
// });
// var newCourse = course.map( function khoaHoc(course) {
    //     // console.log(course);
    //     return {
    //         id: course.id,
    //         name: `khoa hoc: ${course.name}`,
    //         coin: `so coi: ${course.coin}`
    //     }
    // } );
    // console.log(newCourse)

// var course = [
//     {
//         id: 1,
//         name: 'Java',
//         coin: 250
//     },
//     {
//         id: 2,
//         name: 'ReactJs',
//         coin: 0
//     },
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 200
//     }
// ]
// var totalCoin = course.reduce(function(total, tongCoin) {
//     return total + tongCoin.coin;
// }, 0);
// console.log(totalCoin);


// var arrDepth = [1, 2 ,[3, 4], 5, 6, [7,8,9]];
// var flatArr = arrDepth.reduce(function(flatOutput, depthNumber) {
//     return flatOutput.concat(depthNumber);
// }, []);
// console.log(flatArr);


// var topics = [ 
//     {
//         topic: `frontend`,
//         courses: [
//             {
//                 id: 1,
//                 title: `javascript`
//             },
//             {
//                 id: 2,
//                 title: `ReactJs`
//             }
//         ]
//     },
//     {
//         topic: `backend`,
//         courses: [
//             {
//                 id: 1,
//                 title: `php`
//             },
//             {
//                 id: 2,
//                 title: `NoteJs`
//             }
//         ]
//     },
// ];
// var newCoure = topics.reduce(function(khoaHoc, list) {
//     return khoaHoc.concat(list.courses);
// }, [])
// console.log(newCoure)


// var title = `xin caho toi la Thang`;
// console.log(title.includes('toi la', 3));

// console.log(Math.PI);
// var random = Math.floor(Math.random() * 5);
// var bonus = [
//     '10 coin',
//     '101 coin',
//     '30 coin',
//     '103 coin',
//     '106 coin'
// ];
// console.log(bonus[random]);

// function myfunction(param) {
//     if (typeof param === 'function') {param(`xin chao`)}  
// }
// function myCallback(value) {
//     console.log(`value: `, value);
// }
// myfunction(myCallback);
// Array.prototype.map2 = function() {
//     console.log(course);
// };
// var course = [
//     'Java',
//     'PHP',
//     'NoteJs'
// ];
// course.map2();
// var htmls = course.map2(function(hienThi) {
//     return `<h2>${hienThi}</h2> `;
// });
// console.log(htmls.join(''));

// var course = [
//     'Java',
//     'PHP',
//     'NoteJs'
// ];
// course.length = 10;
// console.log(course);
// for ( var i in course ) {
//     console.log(course[i]);
// }

// var course = [
//     'Java',
//     'PHP',
//     'NoteJs'
// ];
// course.forEach(function(text, number, array) {
//     console.log(text, number, array);
// })
// Array.prototype.filter2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this);
//         }
//     }
// }
// var course = [
//     {
//         name: 'JavaScript',
//         coin: 320
//     },
//     {
//         name: 'PHP',
//         coin: 543
//     },
//     {
//         name: 'NoteJs',
//         coin: 0
//     }
// ];
// var filterCourse = course.filter(function(khoaHoc, index, array) {
//     console.log(khoaHoc, index, array);
//     // return khoaHoc.coin > 400;
// });

// var course = [
//     {
//         name: 'JavaScript',
//         coin: 320,
//         isFinish: true
//     },
//     {
//         name: 'PHP',
//         coin: 543,
//         isFinish: true
//     },
//     {
//         name: 'NoteJs',
//         coin: 3,
//         isFinish: true
//     }
// ];
//  var result = course.some(function(khoaHoc, index, array) { 
//     return course.isFinish;
//  });
//  console.log(result);


// document.write(`<h1>'Vu Minh Thang'</h1>`)
// var tieuDe = document.querySelector('.heading');
// console.log(tieuDe);
// console.log(document.forms[`form-1`]);
// let smile = document.querySelectorAll('ul');
// console.log(smile.getElementsByT('li'));

// var getElement = document.querySelector('h1');
// console.log(getElement);
// getElement.setAttribute('class', 'heading')

// var headingElement = document.querySelector('h1');
// console.log(headingElement.textContent );
// console.log(headingElement.innerText = 'Hehe' );

// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = '<i> hehe </i>'
// console.log([boxElement]);
// boxElement.style.width = '100px';
// boxElement.style.height = '200px';
// boxElement.style.backgroundColor = 'violet';
// Object.assign(boxElement.style, {
//     width : '100px',
//     height : '100px',
//     backgroundColor: 'violet'

// var boxElement = document.querySelector('.box');
// boxElement.classList.add('red');
// boxElement.classList.remove('red');

// var h1Element = document.querySelectorAll('h1');
// h1Element.onclick = function() {
//     console.log(Math.random());
// }
// for (var i = 0; i < h1Element.length; i++) {
//     h1Element[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }


// var inputElement =
//  document.querySelector('input[type = "checkbox"]');
// inputElement.onchange = function(e){
//     console.log(e.target.checked);
// }

// var inputElement =
//  document.querySelector('select');
// inputElement.onchange = function(e){
//     console.log(e.target.value);
// }


// var aElement = document.links;
// for (var i = 0; i < aElement.length; i++) {
//     aElement[i].onclick = function(e) {
//         console.log(e.target.href);
//     }
// }

// var btn = document.getElementById('btn');
// function viec1(){
//     console.log('viec 1')
// };
// btn.addEventListener('click', viec1)
// setTimeout(function() {
//     btn.removeEventListener('click', viec1)
// },3000)
// console.log(btn);
// btn.onclick = function() {
//     console.log('Viec 1');
//     console.log('Viec 2');
//     console.log('Viec 3');
// }

// var json = 'false';
// var json2 = '["java", "array"]';
// var json3 = '{"name":"Minh Thang", "age":18 }';
// console.log(json3);
// var a = '1';
// console.log(JSON.parse(json3));
// console.log(JSON.stringify(1));

// setTimeout(function() {
//     console.log(1);
//     setTimeout(function() {
//         console.log(2);
//     }, 1000)
// }, 1000)

// var promise = new Promise(
//     function(resolse, reject) {
        // resolve(): thành công
        // reject(): thất bại
        // reject('that bai')
//         resolse();
//     }
// );
// promise
//     .then(function() {
//         console.log('Success 1')
//     })
//     .then(function() {
//         console.log('success 2')
//     })
//     .catch(function(error) {
//         console.log(error)
//     })
//     .finally(function() {
//         console.log('done')
//     })

// function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve,ms);
//     });
// }

// sleep(1000) 
//     .then(function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(2);
//         return new Promise(function(resolve, reject) {
//             reject('co loi xay ra');

//         });
//     })
//     .then(function() {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(function() {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch(function(error) {
//         console.log(error);
//     })

var promise = new Promise(function(resolve, reject) {
    // resolve('success !');
    reject('loi roi')
})
.then(function(result) {
    console.log('result:', result);
})
.catch(function(error) {
    console.log('ket qua: ', error);
})


