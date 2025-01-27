let loggedIn = true
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (loggedIn) {
    console.log("You're logged in.")
    console.log("Here are the items in your cart:")
    console.log('-----------------------------------')
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i])
    }
} else (
    console.log("You need to be logged in, before you can view your cart.")
)

console.log('-----------------------------------')

let checking = 1000
console.log(`Checking: $${checking}`);

function deposit(amount) {
    console.log('-----------------------------------');
    console.log(`You deposited: $${amount}`);
    checking = checking + amount;
    console.log('-----------------------------------');
    return `Checking: $${checking}`;
}

function withdrawl(amount) {
    console.log('-----------------------------------');
    console.log(`You widthrew: $${amount}`);
    checking = checking - amount;
    console.log('-----------------------------------');
    return `Checking: $${checking}`
}

function checkBalance() {
    console.log('-----------------------------------');
    return `Your current balance is: $${checking}`;
}

console.log(deposit(100))
console.log(withdrawl(200))
console.log(deposit(50))
console.log(checkBalance())

