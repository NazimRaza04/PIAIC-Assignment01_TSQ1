"use strict";
// 10 .Adding Comments: Choose two of the programs you’ve written, 
// and add at least one comment to each. If you don’t have anything specific 
// to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
//Nazim Raza Dated: 07.07.2023
//1 . Name Cases
//Helps learning to switch between lowercase, uppercase and titlecase letters.
var abc = "Mr. Zia Khan";
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());
function toTitleCase(abc) { return abc.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' '); }
console.log(toTitleCase(abc));
//2. Stripping Names
//Helps learning to write with or without using whitespaces.
const personname = "\t Nazim Raza \n";
console.log(personname);
console.log(personname.trim());
