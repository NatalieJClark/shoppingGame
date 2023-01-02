// Welcome
alert ("Welcome to Let's Shop!");
let nameAns = prompt ("What is your name?");

// Want to shop?
let shoppingAns = prompt (`Hello ${nameAns} would you like to go shopping?`);

// YES want to shop
if (shoppingAns == "yes" || shoppingAns == "Yes" || shoppingAns == "YES"){
    var moneyAns = prompt (`So ${nameAns} how much are you planning to spend (£)?`);
}

// Want to spend >0 <=50
if (moneyAns > 0 && moneyAns <= 50) {
    alert ("Very sensible!");
    alert ("Think of three things you would like to buy today.");
    var listAnsA = prompt ("Ok, what's the first item on your shopping list?");
    var listAnsB = prompt ("Great, and what's the second item on your shopping list?");
    var listAnsC = prompt ("What's the final item on your shopping list?")
    const listArray = [listAnsA, listAnsB, "and", listAnsC];
    alert (`Have fun buying ${listArray}`);
} 

// Want to spend >50 <100
else if (moneyAns > 50 && moneyAns < 100) {
    alert ("Wow! Big Spender!");
    alert ("Think of three things you would like to buy today.");
    var listAnsA = prompt ("Ok, what's the first item on your shopping list?");
    var listAnsB = prompt ("Great, and what's the second item on your shopping list?");
    var listAnsC = prompt ("What's the final item on your shopping list?")
    const listArray = [listAnsA, listAnsB, "and", listAnsC];
    alert (`Have fun buying ${listArray}`);
} 

// Want to spend >=100
else if (moneyAns >= 100) {
    alert ("Better be careful!");
    alert ("Think of three things you would like to buy today.");
    var listAnsA = prompt ("Ok, what's the first item on your shopping list?");
    var listAnsB = prompt ("Great, and what's the second item on your shopping list?");
    var listAnsC = prompt ("What's the final item on your shopping list?");
    const listArray = [listAnsA, listAnsB, "and", listAnsC];
    alert (`Have fun buying ${listArray}`);
} 

else if (shoppingAns == "no" || shoppingAns == "No" || shoppingAns == "NO") {
    alert ("That's a shame, hope to see you again soon!");
} 

else {
    alert ("I wasn't expecting that answer!");
}
