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


var topics = [ 
    {
        topic: `frontend`,
        courses: [
            {
                id: 1,
                title: `javascript`
            },
            {
                id: 2,
                title: `ReactJs`
            }
        ]
    },
    {
        topic: `backend`,
        courses: [
            {
                id: 1,
                title: `php`
            },
            {
                id: 2,
                title: `NoteJs`
            }
        ]
    },
];
var newCoure = topics.reduce(function(khoaHoc) {

}, [])