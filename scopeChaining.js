name = "Joyjeet";

console.log("Line nuber 3", name);

function sayName() {
    name = "Mr. J";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        var name ="Mr. JM";
        console.log("line number 11", name);
    }
}


sayName();