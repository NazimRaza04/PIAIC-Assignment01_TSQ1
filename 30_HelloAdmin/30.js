"use strict";
// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log 
// in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, 
// would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let users = ["admin", "user1", "user2", "user3", "user4"];
if (users.includes("admin")) {
    console.log("Hello Admin, would you like to see a status report?");
}
if (users.includes("user1")) {
    console.log("Hello Eric, Thank you for logging in again.");
}
if (users.includes("user2")) {
    console.log("Hello Anthony, Thank you for logging in again.");
}
if (users.includes("user3")) {
    console.log("Hello John, Thank you for logging in again.");
}
if (users.includes("user4")) {
    console.log("Hello Angel, Thank you for logging in again.");
}
