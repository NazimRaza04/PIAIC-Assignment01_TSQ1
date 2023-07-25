//42. Great Magicians: Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.


function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i].charAt(0).toUpperCase() + magicians[i].slice(1));
    }
}

let magicians = ['Criss Angel', 'David Blaine', 'Apollo Robbins'];
show_magicians(magicians);



magicians.forEach((v, i) => magicians[i] = "great "+ v)
function make_great(magicians) {
    magicians.forEach(v => console.log(v));
}
show_magicians(magicians);