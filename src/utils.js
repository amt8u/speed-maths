import { OPERATORS } from "./constants";

// Generate random number between min and max including the limits
function getRandomNumber(min, max) {
    // return parseInt(Math.random() * (end - start) + start); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Recursively generates random numbers until you get one which is not in the set. Coz random numbers can repeat!
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

// Creates array of random numbers within a range
function generateInputs(num, start, end) {
    let set = new Set();
    // return empty set if you ask for more than what is possible
    // eg. generate 5 random numbers between 4 and 7
    if (end - start <= num) {
        return set;
    }
    // add new random numbers untill we get the desired number of values in the set
    while (set.size !== num) {
        addRandomNumber(set, start, end);
    }
    return set;
}

// Randomly select operator based on difficulty level chosen
function generateRandomOperator(level) {
    return OPERATORS[getRandomNumber(0, level)];
}

// Calculate the result based on inputs and operator chosen for the question
// Can be extended to support more operations like ^, mod, &, | etc.
// You can also add custom operators to constants.js. Just add new functions and new case statement in below function to support them.
function evaluateExpression(inputs, operator) {
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


// Creates a set of options to be used for answers
// Generating relatable and confusing options is not easy
// For now just create random numbers between (answer - 5) and (answer + 5)
// TODO - To achieve better options we also need to account for the operator chosen
function generateRandomOption(set, result) {
    set.add(result + getRandomNumber(result - 5, result + 5));
    return set;
}

// Returns a set of randomly generated options
function generateOptions(num, result) {
    let optionSet = new Set([result]);
    // Add static value
    // Don't remember why I added a static value
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

