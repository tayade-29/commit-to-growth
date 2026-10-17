/**
 Challenge: Build a Transaction Tracker
You receive transactions like these:
const transactions = [
  { type: "income", amount: 5000 },
  { type: "expense", amount: 1200 },
  { type: "expense", amount: 800 },
  { type: "income", amount: 2000 },
  { type: "expense", amount: 500 }
];


Write a function createWallet(initialBalance) that returns an object with three methods:
- deposit(amount) — adds money to the balance and returns the updated balance.
- withdraw(amount) — subtracts money only if sufficient funds exist. Otherwise, return "Insufficient balance".
- getBalance() — returns the current balance.
Rules:
1. The balance must be private — don't expose a variable that can be modified directly from outside.
2. Reject zero or negative deposit/withdraw amounts.
3. Each wallet must maintain its own independent balance.
4. Don't use a class.
Example usage:
const wallet1 = createWallet(1000);
const wallet2 = createWallet(500);

wallet1.deposit(200);
wallet1.withdraw(300);

console.log(wallet1.getBalance()); // 900
console.log(wallet2.getBalance()); // 500


Your goal is to figure out how to combine a closure, returned object, and methods.
Try writing the function yourself. Don't worry about getting it perfect on the first attempt — I'll review your code without immediately giving away the full solution.
 */



const transactions = [
  { type: "income", amount: 5000 },
  { type: "expense", amount: 1200 },
  { type: "expense", amount: 800 },
  { type: "income", amount: 2000 },
  { type: "expense", amount: 500 }
];

function createWallet(initialBalance){
    let balance =initialBalance;
    return {
       deposit: (amount)=>{
        balance =balance+amount;
        return balance;
       } ,
       withdraw :(amount)=>{
        if(amount>balance){
            console.log('Insufficient Balance')
        }
        else{
            balance = balance-amount;
            console.log(`amount withdrawn ${amount}  and balance left: ${balance}`)
        }
       },
       getBalance : () =>{
        return balance;
       }
    }
    }

const wallet1 = createWallet(1000);
const wallet2 = createWallet(500);

wallet1.deposit(200);
wallet1.withdraw(300);

console.log(wallet1.getBalance()); // 900
console.log(wallet2.getBalance()); // 500