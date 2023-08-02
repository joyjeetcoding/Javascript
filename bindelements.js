const joyjeet = {
    firstName: "Joyjeet",
    lastName: "Mukherjee",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        ans he is studying ${this.courseCount} courses
        `);
    },
};

const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
};

// joyjeet.getInfo();
// dj.getInfo();

// var djInfo = joyjeet.getInfo.bind(dj);
// djInfo();

joyjeet.getInfo.call(dj);  