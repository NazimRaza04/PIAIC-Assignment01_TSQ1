"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// •Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating the name of the guest 
// who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name 
// of the new person you are inviting.
// • Print a second set of invitation messages, 
// one for each person who is still in your list.
let guestList = ["Raheel", "Amjad", "Zubair", "Nomeel"];
guestList.forEach((item, index) => console.log(`${item}, You are cordially invited at my place for dinner tonight at 9pm.`));
guestList.forEach((item1, index1) => console.log(`${item1}, Nomeel just informed that he can't make it tonight.`));
guestList.push("Umair");
delete guestList[3];
guestList.forEach((item2, index2) => console.log(`${item2}, We have replaced Nomeel with Umair. See you tonight.`));
