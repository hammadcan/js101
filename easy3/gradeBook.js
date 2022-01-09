function getGrade(grade1, grade2, grade3) {
  let finalGrade = (Number(grade1) + Number(grade2) + Number(grade3)) / 3;
  if (finalGrade >= 90) {
    console.log('A');
  } else if (finalGrade >= 80) {
    console.log('B');
  } else if (finalGrade >= 70) {
    console.log('C');
  } else if( finalGrade >= 60) {
    console.log('D');
  } else if (finalGrade < 60) {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"