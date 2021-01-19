/*----------Start Digital Clock----------*/
function currentTime() {
    var myDate = new Date(),
    myHours = myDate.getHours(),
    myMinutes = myDate.getMinutes(),
    mySeconds = myDate.getSeconds();
    document.getElementById("digitalClock").textContent = myHours + ' : ' + myMinutes +' : '+  mySeconds; 
    } 
    var myUpdate = setInterval(function(){currentTime()},0);
/*----------End Digital Clock----------*/
/*----------Start Calculator----------*/
var evaluation = [],
    display = document.getElementById("display"),
    powResult,
    lastAnswer;
// UPDATE DISPLAY WITH NUMBERS
function updateDisplay(numVal) {
    display.value += numVal;
    evaluation.push(numVal);
}
// UPDATE DISPLAY WITH OPERATORS
function updateDisplayOperators(operatorVal) {
    display.value += operatorVal;
    evaluation.push(operatorVal);
} 
// SQUARE ROOT VALUE
function sqRoot() {
    display.value = Math.sqrt(display.value);
    if (isNaN(display.value)) {
        display.value = "Math Error!";
    } else {
        evaluation = [display.value];
    }  
}
// ABSOULTE VALUE
function absValue() {
    display.value = Math.abs(display.value);
    evaluation = [display.value];
} 

function pow(a,b) {
    display.value = Math.pow(a,b);
}

// RESULTS
function calcOperation() { 
    if (display.value == " " || display.value == undefined || display.value == "Syntax Error!" || display.value == "Calculate Something!") {
        display.value = "Calculate Something!";
        evaluation = [];
    } else {
        display.value = eval(evaluation.join(""));
        if (display.value == Infinity) {
            display.value = "Math Error!";
        } else if (display.value == SyntaxError || isNaN(display.value) == true || display.value == undefined) {
            display.value = "Syntax Error!";
        } else {
            evaluation = [display.value];
            lastAnswer = display.value;
        } 
    }
}
// BACK BUTTON
function backBtn() {
    evaluation.pop();
    display.value = evaluation.join("");
}
// CLEAR BUTTON
function clearBtn () {
    display.value = " ";
    evaluation = [];
}
// ANSWER BUTTON (LAST VALUE)
function ansVal() {
    display.value = lastAnswer;
    if (display.value == undefined || isNaN(display.value)) {
        display.value = "0";
    } else {
        evaluation = [lastAnswer]; 
    }
}
/*----------End Calculator----------*/