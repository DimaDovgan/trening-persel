
// const options = {
//     method: "POST"
// }
// fetch("https://translate.googleapis.com/v3beta1/Ukrainian:detectLanguage/Будинок:translateText",options).then(r => console.log(r));
//new Intl.NumberFormat().format("10,")
// function add(a, b) {
//     return (Number(a) + Number(b))
//     //return a.toLocaleString();
//     //.toLocaleString('fullwide', {useGrouping:false}); // Fix me!
// }


// function add(A, B) {
//   const AL = A.length
//   const BL = B.length
//   const ML = Math.max(AL, BL)

//   let carry = 0, sum = ''

//   for (let i = 1; i <= ML; i++) {
//     let a = +A.charAt(AL - i)
//     let b = +B.charAt(BL - i)

//     let t = carry + a + b
//     carry = t/10 |0
//     t %= 10

//     sum = (i === ML && carry)
//       ? carry*10 + t + sum
//       : t + sum
//   }

//   return sum
// }

// console.log("hjlks;fsd;", add('63829983432984289347293874', '90938498237058927340892374089'));
// function validSolution(board) {
//   for (i = 0; i < board.length; i++){ ///O(N)*O(1)
//     if (board[i].includes(1) && board[i].includes(2) && board[i].includes(3) && board[i].includes(4) && board[i]
//       .includes(5) && board[i].includes(6) && board[i].includes(7) && board[i].includes(8) && board[i].includes(9))
//     {}
//     else { return false };
//   }
  
//   for (k = 0; k < board.length; k++){///O(N)*O(N^2)*O(1)
//     let arr = [];
//     for (i = 0; i < board.length; i++){
//       arr.push(board[i][k])
//     }
//     if (arr.includes(1) && arr.includes(2) && arr.includes(3) && arr.includes(4) && arr
//       .includes(5) && arr.includes(6) && arr.includes(7) && arr.includes(8) && arr.includes(9)) {
//     }
//     else {
//       return false
//     }
//   }
//   for (i = 0; i < 9; i+=3){//O(N)*O(N^2)*O(1)
//     let arrRectangle = [];
//     for (k = 0; k <3; k++){
//       arrRectangle.push(board[k][i]);
//       arrRectangle.push(board[k][i+1]);
//       arrRectangle.push(board[k][i + 2]);
//     }
//     if (arrRectangle.includes(1) && arrRectangle.includes(2) && arrRectangle.includes(3) && arrRectangle.includes(4) && arrRectangle
//       .includes(5) && arrRectangle.includes(6) && arrRectangle.includes(7) && arrRectangle.includes(8) && arrRectangle.includes(9)) {
//     }
//     else {
//       return false
//     }
//   }
//   for (i = 0; i < 9; i+=3){//O(N)*O(N^2)*O(1)
//     let arrRectangle = [];
//     for (k = 3; k <6; k++){
//       arrRectangle.push(board[k][i]);
//       arrRectangle.push(board[k][i+1]);
//       arrRectangle.push(board[k][i + 2]);
//     }
//     if (arrRectangle.includes(1) && arrRectangle.includes(2) && arrRectangle.includes(3) && arrRectangle.includes(4) && arrRectangle
//       .includes(5) && arrRectangle.includes(6) && arrRectangle.includes(7) && arrRectangle.includes(8) && arrRectangle.includes(9)) {
//     }
//     else {
//       return false
//     }
//   }
  
//     for (i = 0; i < 9; i+=3){//O(N)*O(N^2)*O(1)
//     let arrRectangle = [];
//     for (k = 6; k <9; k++){
//       arrRectangle.push(board[k][i]);
//       arrRectangle.push(board[k][i+1]);
//       arrRectangle.push(board[k][i + 2]);
      
//     }
//       if (arrRectangle.includes(1) && arrRectangle.includes(2) && arrRectangle.includes(3) && arrRectangle.includes(4) && arrRectangle
//       .includes(5) && arrRectangle.includes(6) && arrRectangle.includes(7) && arrRectangle.includes(8) && arrRectangle.includes(9)) {
//     }
//     else {
//       return false
//     }
//   }
//   return true;

// }
// const date = new Date();
// console.log(date.getTime());
// let sum = 0;
// for (let x = 0; x < 10000; x++){
//   sum += x;
// }
// ///складність цієї програми ==O(N)*O(1)+O(N)*O(N^2)*O(1)+O(N)*O(N^2)*O(1)+O(N)*O(N^2)*O(1)+O(N)*O(N^2)*O(1)=O(N)+O(N^3)+O(N^3)+O(N^3)+O(N^3)=O(N^3);

// console.log("jlsfgsfg;f",validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
//                                 [6, 7, 2, 1, 9, 5, 3, 4, 8],
//                                 [1, 9, 8, 3, 4, 2, 5, 6, 7],
//                                 [8, 5, 9, 7, 6, 1, 4, 2, 3],
//                                 [4, 2, 6, 8, 5, 3, 7, 9, 1],
//                                 [7, 1, 3, 9, 2, 4, 8, 5, 6],
//                                 [9, 6, 1, 5, 3, 6, 2, 8, 4],
//                                 [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]]))//, true;
// const date2 = new Date();

// console.log("work time", date2.getTime() - date.getTime(),"ms")



// function generateHashtag(str) {
//   if (str.length > 0&&str!==" " &&str!=="") {
//   let arr = str.split(" ");
//   let massage = ["#"];
//     for (let i = 0; i < arr.length;i++) {
//     let worddd = arr[i].split("");
//     worddd[0] = worddd[0].toUpperCase();
//     massage.push(...worddd);
//   }
//   return massage.join("");
//   }
//   else {
//     return false;
//   }
// }
// console.log("foo",generateHashtag(" "));

////////////???????????????????
// function parseMolecule(formula) {
//   // do your science here
//   let globalArr=[]
//   let arr = formula.split("[");
//   for (const iterator of arr ) {
//     arr2 = iterator.split("]");
//     if()
//     globalArr.push(...arguments)
//   }
//   console.log(arr2)
//   //let arr2=arr.split("]")
//  // console.log(arr2)
// }
// parseMolecule("K4[ON(SO3)2]2");
// parseMolecule("Mg(OH)2");//, {Mg: 1, O: 2, H: 2}),

///Intervals
//function sumIntervals(intervals) {
  // let sum = 0;
  // let arr = [];

  // for (const iterator of intervals) {
  //   arr.push(...iterator);
  //   for (const arrIterator of arr) {
  //     if (iterator[0] < arrIterator) {
  //       sum += iterator[1] - arrIterator;
        
  //     }
  //     else {
  //       sum += iterator[1] - iterator[0]
  //       //arr.push(...iterator);
  //     }
  //   }
    
  //   // sum += iterator[1] - iterator[0]
  //   // arr.push(...iterator);
  // }
  // console.log(sum)
//}
// function sumIntervals(intervals) {
//   let sum = 0;
//   let arr = [];
//   for (let x = 0; x < intervals.length; x++) {
//     if (intervals[x] === intervals[x + 1]) {
//     sum=
//   }}
  
//   for (const numbersIntervals of intervals) {
//     arr.push(...numbersIntervals);
//     if()
//     for (const iterator of arr) {
//       if (numbersIntervals[0] < iterator&&numbersIntervals[1] > iterator) {
//         numbersIntervals[0] = iterator;
//       }
//       if (numbersIntervals[0] === iterator && numbersIntervals[1] === iterator) {
//         numbersIntervals[0]=numbersIntervals[1]
//       }
      
//     }
//     sum += numbersIntervals[1] - numbersIntervals[0];
    
//   }

//    return sum

// }
// console.log(sumIntervals(
//    [[1,5],[1,5]]
// ));






function balancedParens(n) {
  let arr = [];
  if (n === 0) {
    arr.push("");
    return arr;
  }
  if (n === 1) {
    arr.push("()");
    return arr;
  }
  if (n > 1) { 
    
  }
  return [];
}

balancedParens(4).sort(), ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]