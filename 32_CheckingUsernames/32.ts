// 32. Checking Usernames: Do the following to create a program that simulates 
// how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' 
// should not be accepted.


let current_users = ["Ahmed", "Bilal", "Cheema", "Daud", "Erum"];
let new_users = ["AHMED", "CHEEMA", "FAIZ", "Gohar", "Hadi"];

let a_current_users = current_users.map(n => n.toUpperCase());
let a_new_users = new_users.map(n => n.toUpperCase());

for (let i = 0; i < a_new_users.length; ++i) {
    if (a_current_users.includes(a_new_users[i])) {
        console.log("You need to enter a new username");
    } else {
        console.log(`${new_users[i]} is available`)
    }
}