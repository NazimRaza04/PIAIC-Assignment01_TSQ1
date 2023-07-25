// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. Call the function three times, 
//using a different number of arguments each time.


function sandwich(...args) {
    let string = "I've added";
    for (let i = 0; i<args.length; ++i) {
        if (i === args.length - 1) {
            string = string + " " + "and" + " " + args[i] + "."
        } else {
            string = string + " " + args[i] + ","
        }
    }
    return string;
}
const includes = sandwich("chicken", "ketchup", "mayo", "olives", `salad in my sandwich`);
console.log(includes);