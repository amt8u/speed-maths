import { OPERATORS } from "./constants";

function getRandomNumber(min, max) {
    // return parseInt(Math.random() * (end - start) + start); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function addRandomNumber(set, start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return set;
    }
    let rndNum = getRandomNumber(start, end);
    if (set.has(rndNum)) {
        addRandomNumber(set, start, end);
    } else {
        set.add(rndNum);
    }
    return set;
}
function generateInputs(num, start, end) {
    let set = new Set();
    if (end - start <= num) {
        return set;
    }
    while (set.size !== num) {
        addRandomNumber(set, start, end);
    }
    return set;
}
function generateRandomOperator(level) {
    return OPERATORS[getRandomNumber(0, level)];
}
function evaluateExpression(inputs, operator) {
    let result = 0;
    let fn;
    let add = (x,y) => x + y;
    let sub = (x,y) => x - y;
    let mul = (x,y) => x * y;
    let div = (x,y) => x / y;
    switch (operator) {
        case "+":
            fn = add;
            break;
        case "-":
            fn = sub;
            break;
        case "*":
            fn = mul;
            break;
        case "/":
            fn = div;
            break;
        default:
            fn = add;

    }
    let arr = [...inputs];
    return fn(arr[0], arr[1]);
}
function generateRandomOption(set, result) {
    set.add(result + getRandomNumber(result - 5, result + 5));
    return set;
}
function generateOptions(num, result) {
    let optionSet = new Set([result]);
    // Add static value
    optionSet.add(result + 10);
    // Add more random numbers
    while(optionSet.size < num) {
        generateRandomOption(optionSet, result);
    }

    return shuffleArray([...optionSet]);
}

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export {
    getRandomNumber,
    addRandomNumber,
    generateInputs,
    generateRandomOperator,
    evaluateExpression,
    generateOptions
}

