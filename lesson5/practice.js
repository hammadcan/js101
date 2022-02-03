//Problem 1 Order the array
// let arr = ['10', '11', '9', '7', '8'];
//
// console.log(arr.sort((a, b) => Number(b) - Number(a)));

//Problem 2 Order based on year published
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
//
// console.log(books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// }));

//Problem 3 Access letter g
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);
// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);

//Problem 4 Change from 3 to 4
// let arr1 = [1, [2, 3], 4];
// console.log(arr1[1][1] = 4);
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// console.log(arr2[2] = 4);
// let obj1 = { first: [1, 2, [3]] };
// console.log(obj1.first[2][0] = 4);
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// console.log(obj2.a.a[2] = 4);

//Problem 5 diplay total age
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// let totalMaleAge = 0;
// for (let member in munsters) {
//   if (munsters[member].gender === 'male') {
//     totalMaleAge += munsters[member].age;
//   }
// }
// console.log(totalMaleAge);

//Problem 6 display name age and gender
// for (let member in munsters) {
//   console.log(`${member} is a ${munsters[member].age}-year old ${munsters[member].gender}.`);
// }

//Problem 7 What are values of a and b?
// let a = 2;
// let b = [5, 8];
// let arr = [a, b];
//
// arr[0] += 2;
// arr[1][0] -= a;
// a = 2;
// b = [3, 8];

//Problem 8 output all vowels
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// let regex = /[^aeiou]/gi;
// Object.values(obj).forEach(word => {
//   console.log(word.join(" ").replaceAll(regex, ""));
// });

//Problem 9 order the array descending
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// (arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     return subArr.slice().sort();
//   } else {
//     return subArr.slice().sort((a, b) => b - a);
//   }
// }));

//Problem 10 order array ascending
// arr.map(subArr => {
//   return subArr.slice().sort((a, b) => {
//     if (typeof a === 'number') {
//       return b - a;
//     }
//
//     if (a < b) {
//       return 1;
//     } else if (a > b) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });
// });

//Problem 11 use map to increment each number by one
// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newarr = {};
// arr.map(object => {
//   for (let key in object) {
//     newarr[key] = object[key] + 1;
//   }
//   return newarr;
// });

//Problem 12 use filter to only include nums that are multiples of 3
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// console.log(arr.map(subarr => {
//   return subarr.filter(element => element % 3 === 0);
// }));

//Problem 13 sort them based on sum of odd nums
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// arr.sort((a, b) => {
//   let oddSumA = a.filter(num => num % 2 === 1)
//     .reduce((sum, next) => sum + next);
//   let oddSumB = b.filter(num => num % 2 === 1)
//     .reduce((sum, next) => sum + next);
//
//   return oddSumA - oddSumB;
// });

//Problem 14 return an array containing colors of fruit and size of vegetables
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// let capitalize = word => word[0].toUpperCase() + word.slice(1);
//
// Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// });

//Problem 15 return an array where only the object nums are even
// let arr = [
//   { a: [1, 2, 3] },
//   { b: [2, 4, 6], c: [3, 6], d: [4] },
//   { e: [8], f: [6, 10] },
// ];
// arr.filter(object => {
//   return Object.values(object).every(subArr => {
//     return subArr.every(num => num % 2 === 0);
//   });
// });

//Problem 16 return an object with the key as first item and value is second
//let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
// let object = {};
// arr.forEach(subArr => {
//   let key = subArr[0];
//   let value = subArr[1];
//   object[key] = value;
// });

//Problem 17 return a string as a UDID
// function UDID() {
//   let string = [];
//   let coinflip;
//   for (let i = 0; i < 32; i++) {
//     coinflip = Math.floor(Math.random() * 2);
//     if (coinflip === 1) {
//       string.push(Math.floor(Math.random() * 9));
//     } else {
//       string.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
//     }
//     switch (i) {
//       case 7:
//         string.push("-");
//         break;
//       case 11:
//         string.push("-");
//         break;
//       case 15:
//         string.push("-");
//         break;
//       case 19:
//         string.push("-");
//         break;
//     }
//   }
//   return string.join("");
// }
//
// console.log(UDID());