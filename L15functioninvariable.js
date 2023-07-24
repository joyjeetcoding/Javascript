/* 
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with all access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input: getUserRole(name, role)

*/

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
       //this is not necessary

    case "subadmin":
      return `${name} is a subadmin to create and delete courses`;
      

    case "testprep":
      return `${name} is a test prep with access to create or delete tests`;
      

    case "user":
      return `${name} is a user to consume content`;
      

    default:
      return `${name} is a trial user`;
      
  }
}


console.log(getUserRole("Joyjeet", "testprep"));

getRole = getUserRole("Sammy", "user");

console.log(getRole);