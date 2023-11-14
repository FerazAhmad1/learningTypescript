const num1Element = document.getElementById("num1") as HTMLInputElement;
const num2Element = document.getElementById("num2") as HTMLInputElement;
const addButton = document.querySelector("button");
console.log(addButton);
addButton?.addEventListener("click", () => {
  console.log("yes");
  const num1 = num1Element.value;
  const num2 = num2Element.value;
  console.log(add(+num1, +num2));
});
function add(num1: number, num2: number) {
  return num1 + num2;
}
