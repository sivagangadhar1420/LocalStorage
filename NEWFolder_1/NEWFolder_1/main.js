// import details, {printName, printAge }  from '/user.js';
import details, {printName as PrintUserName, printAge as PrintUserAge }  from '/user.js';

// import details   from '/user.js';
const res   =new details("Bob", 30);
console.log(res);
// printName(res);
// printAge(res)
PrintUserName(res);
PrintUserAge(res);
