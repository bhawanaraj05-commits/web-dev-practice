// const arr= [12, 34, true, "Raj"]

// arr.unshift(false) //add element in start
// arr.push(67)
// arr.join()
// arr.pop()


// // slice and splice
// const arr1= arr.slice(1,3)

// console.log(arr1)
// console.log("arr",arr)

// const arr2= arr.splice(1,3)

// console.log(arr2)
// console.log("arr",arr)

// console.log(arr.indexOf(2))

//console.log(arr.length)


//Task:
//calculate subtotal using ticket price * quantity
//if qty is 5 or more, apply 50% discount
//otherwise, if qty is 3 or more, apply 10% discount
//otherwise, no qty base discount is applied
//if coupon code is valid, apply additional 5% discount to amount remaining
//after the quantity discount
//round final amount using math.round
//print subtotal,discount and final payable amount
//eg: if ticket is 250 and qty is 3, subtotal is 750
//the qty discount is 75, coupon discount is 33.75
//the final payable amount is 641 after rounding

let price = 250;
let qty = 3;
let coupon = "YES";

let subtotal = price * qty;
let discount = 0;

if (qty >= 5) {
    discount = subtotal * 0.50;
} else if (qty >= 3) {
    discount = subtotal * 0.10;
}

let amount = subtotal - discount;
let couponDiscount = 0;

if (coupon === "YES") {
    couponDiscount = amount * 0.05;
}

let finalAmount = Math.round(amount - couponDiscount);

console.log("Subtotal:", subtotal);
console.log("Quantity Discount:", discount);
console.log("Coupon Discount:", couponDiscount);
console.log("Final Payable Amount:", finalAmount);