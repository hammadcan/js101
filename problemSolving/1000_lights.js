function lightsOn(switches) {
  let litLights = [];

  for (let count = 1; count < switches; count++) {
    if (count ** 2 <= switches) {
      litLights.push(count ** 2);
    }
  }
  return litLights;
}

console.log(lightsOn(100));