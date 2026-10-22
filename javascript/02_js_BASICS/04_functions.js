//function verifyPayment(transactionId){
    // if(transactionId===undefined){
//     if(!transactionId){


//         console.log("Payment failed !!")
//         return;
//     }
//     console.log("transactionId:",transactionId)
//      console.log("Payment is Successfull")
//      return transactionId

// }

// console.log(verifyPayment("abc124"))

// const addExpenses= (...exp)=>{
//     console.log("exp", exp)
//     const totalExpense=
//     console.log("Yourtotal expense is: ")
    
// }

// addExpenses(10, 20, 30, 40)

// const addNumbers= (a,b)=>{    //in arrow function this keyword doesnot work
//        return a+b;


// }

// const person1={
//    userName:"user_123",
//      email:"user@gmail.com",
//       age:20,
//     subscriptions:{
//         netflix: "Gold",
//         amazonPrime:"basic"

   // },
    // show:showDetails= ()=>{
    //     console.log("this", this)
    //     console.log("this is user:"+this.userName + "age is: "+this.age )
    // },
//     show:showDetails= ()=>{
//         console.log("this",this)
//         console.log("this is user:"+this.userName + "age is: "+this.age )
//     }
// }

// person1.show()



/*
Task : Shopping Cart and Variable Arguments

Concepts: Objects, arrays inside objects, rest parameters, loops, functions

const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

Create a shoppingCart object containing a customer name and an array of items. Each item should have a name, price, and quantity.

Create a function calculateCartTotal(...prices) that accepts any number of prices and returns their sum.

Create a function calculateItemTotal(item) that calculates the total cost of one item.

Create a function calculateCartBill(cart) that calculates the complete bill.

Apply a 10% discount if the bill exceeds ₹2,000.

Display the Checkout Summary

Write a function displayCheckoutSummary(cart) that displays:

1. Customer name

2. List of items with quantity and individual item total

3. Cart subtotal

4. Discount applied

5. Final payable amount

Test the program with an empty cart, a single item, and multiple items.

Interview questions:

What is the difference between rest parameters and ordinary parameters?

What happens when a function receives more arguments than its declared parameters?

What is the difference between ...prices in a function parameter and the spread syntax used in a function call?


Example output format:

Customer: Rahul

Milk       x 2    ₹60
Bread      x 1    ₹40
Eggs       x 2    ₹180
Rice       x 1    ₹250

Subtotal:           ₹530
Discount:           ₹0
Final Amount:       ₹530
*/


const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};

function calculateCartTotal(...prices) {
    let sum = 0;

    for (let price of prices) {
        sum += price;
    }

    return sum;
}

function calculateItemTotal(item) {
    return item.price * item.quantity;
}

function calculateCartBill(cart) {
    let prices = [];

    for (let item of cart.items) {
        prices.push(calculateItemTotal(item));
    }

    let subtotal = calculateCartTotal(...prices);
    let discount = subtotal > 2000 ? subtotal * 0.10 : 0;
    let finalAmount = subtotal - discount;

    return { subtotal, discount, finalAmount };
}

function displayCheckoutSummary(cart) {
    console.log("Customer:", cart.customerName);
    console.log("");

    for (let item of cart.items) {
        let total = calculateItemTotal(item);

        console.log(
            item.name.padEnd(12) +
            " x " + item.quantity +
            "    ₹" + total
        );
    }

    let bill = calculateCartBill(cart);

    console.log("");
    console.log("Subtotal:       ₹" + bill.subtotal);
    console.log("Discount:       ₹" + bill.discount);
    console.log("Final Amount:   ₹" + bill.finalAmount);
}

displayCheckoutSummary(shoppingCart);


const emptyCart = {
    customerName: "Rahul",
    items: []
};

displayCheckoutSummary(emptyCart);


const singleItemCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 }
    ]
};

displayCheckoutSummary(singleItemCart);
