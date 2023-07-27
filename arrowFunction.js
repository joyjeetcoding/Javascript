var isEven = (elem) => {
    // if(elem % 2 === 0) {
    //     return true;
    // }
    // return false;

    return elem % 2 == 0;
}

// console.log(isEven(3));

// var result = [2, 3, 6, 8].every(isEven);
// console.log(result);

// var result = [2, 4, 6, 8].every((e) => {
//     return e % 2 === 0;
// });
// console.log(result);

// var result = [2, 3, 6, 8].every((e) => e % 2 === 0);
// console.log(result);

var result = [2, 4, 6, 8].every((e) => (e % 2 === 0));
console.log(result);