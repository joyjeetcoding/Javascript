function init(){
    var firstName = "Joyjeet"
    console.log("I am init");
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init();

