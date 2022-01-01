const input = require('readline-sync');

function area() {
    let length = input.question('Enter the length of the room in meters: ');
    let width = input.question('Enter the width of the room in meters: ');
    let areaInMeters = length * width;
    let areaInFeet = areaInMeters * 10.7639;
    console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet`);
}

area()