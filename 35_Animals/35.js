"use strict";
//35. Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
//• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. 
//You could print a sentence such as Any of these animals would make a great pet!
let animals = ["Lion", "Tiger", "Leopard"];
animals.forEach((n) => console.log(n));
console.log(animals[0], `is the king of a jungle.`);
console.log(animals[1], `is sensitive and emotional.`);
console.log(animals[2], `is a versatile hunter.`);
console.log(`All three are carnivores and skilled hunters.`);
console.log(animals[1], `would make a great pet`);
