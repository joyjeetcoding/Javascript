// for(let i = 1; i <= 10; i++)
// {
//     console.log(i);
// }

const myStates = ["West Bengal", "Rajasthan", "Delhi", 1947, "Assam", "Maharashtra"];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] == "string")
    continue;
  console.log(myStates[i]);
}
