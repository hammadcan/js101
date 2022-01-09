function triangle(size) {
  for (let i = 1; i <= size; i++) {
    console.log('*'.repeat(i).padStart(size));
  }
}

triangle(5);