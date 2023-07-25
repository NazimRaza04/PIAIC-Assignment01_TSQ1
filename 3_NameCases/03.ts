//3. Name Cases: Store a person’s name in a variable
//and then print that person’s name in lowercase, uppercase, and titlecase.

let userName = "Eric Newton";

console.log(userName .toLowerCase());
console.log(userName .toUpperCase());


const newName = userName.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(newName)
