// var retVal = Math.max(2, 5, 7, 9, 2, 10);
// console.log(retVal);

// var myObj = {}

// Object.assign(myObj, {a:1, b:2, c:3}, {z:9, y:8, x:7});
// console.log(myObj);

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4];
// console.log(sumOne(...myA));    //spread Operator

function sumTwo(...args) {      //rest operator
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2, 3, 1,5, 7));

// function sumTwo(a, b, ...args) {      //rest operator
//     console.log(args);
//     let multi = a * b;

//     let sum = 0;
//     for (const arg of args) {
//         sum += arg;
//     }
//     return [sum, multi];
// }

// console.log(sumTwo(2, 3, 1, 5, 7));