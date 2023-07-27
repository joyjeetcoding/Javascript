var user = {
    firstName: "Joyjeet",
    lastName: "Mukherjee",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseNumbers: [],
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
    info: function () {
        console.log(user);
    }
};

var courseList = true;
console.log(user.firstName);
user.buyCourse("React Js course");
user.buyCourse("Angular Js course");
console.log(user.getCourseCount());

// info = all infos, coursenumbers 