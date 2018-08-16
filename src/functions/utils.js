

const sayHi = () => {
  console.log('Zé roberto myst play soccer');
};

const doSomething = (a, b) => {
  let result = a + b;

  for (let i = 0; i < b - a; i ++) {
    result += i * a + b;
  }

  result += " Blessed is he who, in the name of the charity and good will, "
    + "shepherds the weak through the valley of darkness, for he is truly his" 
    + "brother's keeper and the finder of lost children. And I will strike down "
    + "upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers"

  return result;
};

export { sayHi, doSomething };