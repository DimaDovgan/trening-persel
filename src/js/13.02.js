//https://bitbucket.org/volosgoto/goit_js_42/src/master/

// const recursion = (number) => {
//     if (number > 1) {
//         return number * recursion(number - 1);
        
        
//     }
//     else {
        
//         return 1;
//     }
// }
// console.log(recursion(3));
// newArr = Arr.map((num, index) => {
    //     if (num > Arr[index + 1]) {
    //         //console.log(Arr[index + 1]);
    //         Arr[index + 1] = num;
    //         return Arr[index + 1];
    //     }
    //     return num;
    // })
    // return newArr;
let numberArr = [2, 178, 167, 89,9,17,49,835,8942,302,93,50,10];
// console.log("OLd Arrr", numberArr);
// const sorting = (Arr) => {
//      let exit;
//     do {
//         exit = false;
//         for (let i = 0; i < Arr.length; i += 1){
//         if (Arr[i] > Arr[i + 1]) {
//             let firstNum = Arr[i];
//             let secondNum = Arr[i + 1];
//             Arr[i + 1] = firstNum;
//             Arr[i] = secondNum;
//             exit = true;
//         }
//         }
//     } while (exit);
//     return Arr

// }
// console.log("My",sorting(numberArr));
///////////////////////////////////////////////

// const sortingSortMethod = (arr) => {
//     return [...arr].sort((a, b) => b - a);
// }
//console.log(sortingSortMethod(numberArr));
/////////////////////////////////////////////////////////////////////


const sorting = (arr, N) => {
    let j, t;
    for (let i = 2; i < N; i++){
        t = arr[i];
        j = i - 1;
        while (j > 0 && t < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = t;
    }
    return arr;
} 
console.log(sorting(numberArr, numberArr.length));
