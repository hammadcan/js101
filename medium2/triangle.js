// function triangle(side1, side2, side3) {
//   if ((side1 === 0) || (side2 === 0) || (side3 === 0)) {
//     console.log('invalid');
//   } else if (side1 + side2 < side3 || side2 + side3 < side1 || side1 + side3 < side2) {
//     console.log('invalid');
//   } else if ((side1 === side2) && side2 === side3) {
//     console.log('equilateral');
//   } else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log('isosceles');
//   } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
//     console.log('scalene');
//   }
// }
//
// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

function triangle(angle1, angle2, angle3) {
  if ((angle1 === 0) || (angle2 === 0) || (angle3 === 0)) {
    console.log('invalid');
  } else if (angle1 + angle2 + angle3 !== 180) {
    console.log('invalid');
  } else if ((angle1 === 90) || (angle2 === 90) || (angle3 === 00)) {
    console.log('right');
  } else if ((angle1 > 90 || angle2 > 90 || angle3 > 90)) {
    console.log('obtuse');
  } else {
    console.log('acute');
  }
}

triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"