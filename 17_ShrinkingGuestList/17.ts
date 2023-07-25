// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive
//in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying 
//that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them
// know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them 
//know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.

let agl2 = ["Raheel", "Amjad", "Zubair", "Nomeel"]

agl2.push("Umair");
delete agl2[3];

agl2.forEach ((item, index) => console.log (`${item}, Good News is that I have ordered a new table for 8.`));


agl2.unshift("Nayil");
agl2.splice(3, 0, "Ahmed");
agl2.push("Hashim");

agl2.forEach ((item, index) => console.log (`${item}, You are cordially invited at dinner tonight around 9pm.`));

agl2.forEach ((item, index) => console.log (`${item}, I am afraid that new table wont arrive on time and I have available space only for 2 people`));

console.log (`${agl2[2]} , I am sorry that I cant invite you tonight. Maybe next week. Take care till then.`);
delete agl2[2];

console.log (`${agl2[3]} , I am sorry that I cant invite you tonight. Maybe next week. Take care till then.`);
delete agl2[3];

console.log (`${agl2[4]} , I am sorry that I cant invite you tonight. Maybe next week. Take care till then.`);
delete agl2[4];

console.log (`${agl2[6]} , I am sorry that I cant invite you tonight. Maybe next week. Take care till then.`);
delete agl2[6];

console.log (`${agl2[7]} , I am sorry that I cant invite you tonight. Maybe next week. Take care till then.`);
delete agl2[7];

agl2.forEach ((item, index) => console.log (`${item}, I'm glad to inform you that you are still invited. See you at dinner.`));

delete agl2[0];
delete agl2[1];

console.log (agl2);