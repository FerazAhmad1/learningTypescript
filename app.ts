const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const addButton = document.querySelector("button");
console.log(addButton);
const numresult: number[] = [];
const stringresultarr: string[] = [];
type numberOrstring = number | string;
type Result = { val: number; timeStamp: Date }; // type alias

interface ResultObj {
  val: number;
  timeStamp: Date;
}

addButton?.addEventListener("click", () => {
  console.log("yes");
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  const result = add(+num1, +num2);

  numresult.push(result as number);
  const stringResult = add(num1, num2);
  stringresultarr.push(stringResult as string);
  console.log(numresult, stringresultarr);
  printResult({ val: result as number, timeStamp: new Date() });
});
function add(num1: numberOrstring, num2: numberOrstring) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
}
function printResult(resultObj: ResultObj) {
  console.log(resultObj.val, resultObj.timeStamp);
}
