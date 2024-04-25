// 1
const numbers = [1, 2, 3, 4, 5]; 

let sumOfSquares = 0;

for (let i = 0; i < numbers.length; i++) {
  sumOfSquares += numbers[i] ** 2;
}
console.log(sumOfSquares);

// 2
function strarr(mass) {
  let arr = mass.split("");
  return arr;
}

console.log(strarr("aziz"));

// 3
function numarr(mass) {
  let arr = mass.toString().split("").map(Number);
  return arr;
}

console.log(numarr(12345));

// 4

function sumOfDigits(number) {
    let sum = 0;
    let strNumber = number.toString();

    for (let digit of strNumber) {
        sum += parseInt(digit);
    }

    return sum;
}

  console.log(sumOfDigits(12345));


// 5

function number(num) {
 let arr = num.split('').reverse().join()
 return arr
}

console.log(number('12345'));