var firstNum = 0;
var secondNum = 0;

function init() {
    firstNum = Number.parseInt(document.getElementById("first").value);
    secondNum = Number.parseInt(document.getElementById("second").value);
}

function writeResult(_result) {

    document.getElementById("result").innerHTML = _result
}

var result = 0;

function plus() {

    init();
    result = firstNum + secondNum;

    writeResult(result)

}

function minus() {

    init();
    result = firstNum - secondNum;
    writeResult(result)
}

function multiply() {

    init();
    result = firstNum * secondNum
    writeResult(result)
}

function division() {

    init();
    result = firstNum / secondNum;
    writeResult(result)
}