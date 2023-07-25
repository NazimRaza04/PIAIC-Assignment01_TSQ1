"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
//print a message indicating the number of people you are inviting to dinner.
let dinnerGuests = ["Raheel", "Amjad", "Zubair", "Nomeel"];
dinnerGuests.forEach((item, index) => console.log(`${item}, You are cordially invited at my place for dinner tonight at 9pm.`));
console.log(`${dinnerGuests.length} people are invited at dinner`);
