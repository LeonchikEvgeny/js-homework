const colors = ["red", "green", "red", "blue", "blue"];

function numberOfPairs(gloves) {
  const result = {};
  gloves.forEach((element) => {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  });
  const resultPair = {};
  for (let key in result) {
    if (result[key] !== 1) {
      resultPair[key] = Math.floor(result[key] / 2);
    }
  }
  return Object.values(resultPair).reduce((acc, element) => {
    acc += element;
    return acc;
  }, 0);
}
