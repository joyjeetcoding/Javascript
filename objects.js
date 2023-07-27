var user = {
    firstName: "Joyjeet",
    lastName: "Mukherjee",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);

abc = user.loginCount;
abcd = abc + 44;
console.log(abcd);

console.log(user);

console.table(user)