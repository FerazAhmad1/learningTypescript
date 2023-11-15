var num1Element = document.getElementById("num1");
var num2Element = document.getElementById("num2");
var addButton = document.querySelector("button");
console.log(addButton);
var numresult = [];
var stringresultarr = [];
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function () {
    console.log("yes");
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    var result = add(+num1, +num2);
    numresult.push(result);
    var stringResult = add(num1, num2);
    stringresultarr.push(stringResult);
    console.log(numresult, stringresultarr);
    printResult({ val: result, timeStamp: new Date() });
});
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timeStamp);
}
