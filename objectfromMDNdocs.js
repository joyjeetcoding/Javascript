var User = {
    name: "",
    getUserName: function(){
        console.log(`User Name is: ${this.name}`);
    },
};

var joyjeet = Object.create(User);
console.log(joyjeet);

joyjeet.name = "Joyjeet Mukherjee"
joyjeet.getUserName();

var joy = Object.create(User, {
    name: {value: "joyjeet"},
    courseCount: {value: 3},
});

joy.getUserName();