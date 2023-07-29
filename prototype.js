var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course Count is: ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function() {
    console.log(`Your First name is ${this.firstName}`);
};

var joyjeet = new User("Joyjeet", 2)
joyjeet.getCourseCount();
joyjeet.getFirstName();
// console.log(joyjeet);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam);