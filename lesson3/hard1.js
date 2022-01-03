// function first() {
//   return {
//     prop1: "hi there"
//   };
// }
//
// function second() {
//   return
//   {
//     prop1: "hi there"
//   };
// }
//
// console.log(first());
// console.log(second());

//Nothing will be logged in the 2nd function

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);
//
// console.log(numArray); //  => "[1, 2]"
// console.log(object);

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }
//
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];
//
// messWithVars(one, two, three);
//
// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
/* 1st case it is reassigning it to a local variable within
the scope of function and the reassignment doesn't work
then the variables are converted into strings with the
array converted into a string as well */

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }
//
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];
//
// messWithVars(one, two, three);
//
// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
/* The variable is again locally pointed to those arrays and not to
 those other variables allowing the console.log to only point to
 the global variable instead */

// function messWithVars(arg1, arg2, arg3) {
//   arg1.splice(0, 1, "two");
//   arg2.splice(0, 1, "three");
//   arg3.splice(0, 1, "one");
// }
//
// let one = ["one"];
// let two = ["two"];
// let three = ["three"];
//
// messWithVars(one, two, three);
//
// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);
/* The variables themselves are invoked from the function as they are spliced
* and this leads to an actual change for the variables. */
