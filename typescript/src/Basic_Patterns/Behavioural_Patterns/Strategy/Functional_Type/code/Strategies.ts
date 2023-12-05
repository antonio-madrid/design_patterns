type Strategy = (numberA: number, numberB: number) => number;

const addStrategy: Strategy = (numberA, numberB) => numberA + numberB;
const subtractStrategy: Strategy = (numberA, numberB) => numberA - numberB;
const multiplyStratety: Strategy = (numberA, numberB) => numberA * numberB;
const divideStrategy: Strategy = (numberA, numberB) => numberA / numberB;

export { Strategy, addStrategy, subtractStrategy, multiplyStratety, divideStrategy };