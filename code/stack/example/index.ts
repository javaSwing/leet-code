import Stack from "../Stack";

function decimalToBinary(decNumber: number) {
  const remStack = new Stack<number>();
  let number = decNumber;
  let binaryString = "";

  while (number > 0) {
    let rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop();
  }

  return binaryString;
}

console.log(decimalToBinary(233));
