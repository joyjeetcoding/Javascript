var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`);
    }
}


var joyjeet = new User("Joyjeet", 2)

console.log(joyjeet);

var sam = new User("Sam", 1);
console.log(sam);