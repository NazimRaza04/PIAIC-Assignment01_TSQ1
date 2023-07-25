//43. Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and 
//one array with the Great added to each magician’s name.

function show_magicians1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i].charAt(0).toUpperCase() + magicians[i].slice(1));
    }
}

let magicians = ['Criss Angel', 'David Blaine', 'Apollo Robbins'];
show_magicians(magicians);

function make_great(m) {
    let new_magicians = [...m];
    m.forEach((v, i) => new_magicians[i] = "Great "+ v)
    return new_magicians
}

function show_magicians(m) {
    m.forEach(v => console.log(v));
}

const great_magicians = make_great(magicians);
show_magicians(great_magicians);
show_magicians(magicians);