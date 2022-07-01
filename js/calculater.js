const sumf = (num1, num2) => {
    return num1 + num2;
}
const subtf = (num1, num2) => {
    return num1 - num2;
}

let calculater = {
    sum: sumf(),
    subtract: subtf(),
}

console.log(calculater.sum = sumf(2,3));
console.log(calculater.subtract = subtf(3,calculater.sum));