
//  snail = function(array) {
//      let newArr = [];
//      for (let g = 0; g < array.length / 2; g += 1) {
//          for (let k = 0+g; k < array.length-g; k += 1) {
//              newArr.push(array[0+g][k]);
//          }
//          for (let i = 1+g; i < array.length-g; i += 1) {
//              newArr.push(array[i][array.length - 1-g]);
         
//          }

//          for (let k = array.length - 1-1; k > -1+g; k -= 1) {
//              newArr.push(array[array.length - 1 - g][k - g]);
//               //console.log("jfhjfh",newArr)
//          }
//          for (let i = array.length - 1-g-1; i > 0+g; i -= 1) {
//              newArr.push(array[i][0 + g ]);
//              console.log(array.length - 1-g-1,"gfdhhdfg",i)
             
//          }
//      }
//      console.log(newArr)
// }
// snail([[1, 2, 3, 4, 5, 6],
//     [20, 21, 22, 23, 24, 7],
//     [19, 32, 33, 34, 25, 8],
//     [18, 31, 36, 35, 26, 9],
//     [17, 30, 29, 28, 27, 10],
//     [16, 15, 14, 13, 12, 11]])//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 3
console.log(Promise.prototype);