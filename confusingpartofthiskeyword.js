console.log(this);

var user = {
    firstName: "Joyjeet",
    courseCound: 4,
    getCourseCount: function() {
        console.log("Line 7", this);
        function sayHello(){
            console.log("Hello");
            console.log("Line 10", this);
        }
        sayHello();
    }
};

user.getCourseCount();

// function sayHello(){
//     console.log("Hello");
// }

// sayHello();