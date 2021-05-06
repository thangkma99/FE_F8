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
var tieuDe = document.getElementById('heading');
console.log({tieuDe});