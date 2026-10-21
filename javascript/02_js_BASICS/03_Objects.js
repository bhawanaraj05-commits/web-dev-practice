// const person1={
//     userName:"user_123",
//     email:"user@gmail.com",
//     age:20,
//     subscription:{
//         netflix: "Gold",
//         amazonPrime:"basic"

//     },

   
//     show: function showDetails(){
//         //console.log("thisv is user: "+this.userName + "age is : "+this.age)
//     }
// }

// console.log(person1.show())




// console.log(person1.show())

// person1.address="Agra"     // . or [] use to add new property and access property
// console.log(person1[email])

// delete person1.userName

// console.log(person1)


// //objects de struycturing

// const{userName, age, email}= person1


// console.log(userName)
// console.log(age)
// console.log(email)


//create object:
//a nested customer object with email, city
//a seats array containinng atleast 3 seat no
//a method calculateTotalAmount()

//execute these:
//print movie name usind dot notation
//read customer city using nested property access
//change ticket price and add booking status prooperty
//print all object keys using object.keys()
//destructure movie name and quantity
//calculate and print total booking amount


const booking = {
    movie: {
        name: "Avengers",
        quantity: 5
    },

    customer: {
        email: "bhawana@gmail.com",
        city: "Mathura"
    },

    seats: [1, 2, 3],
    ticketPrice: 450,

    calculateTotalAmount: function() {
         console.log(this.movie.quantity * this.ticketPrice);
    }
};

console.log("Movie Name:", booking.movie.name);
console.log("Customer City:", booking.customer.city);
booking.ticketPrice = 250;
booking.bookingStatus = "Confirmed";

console.log("Updated Ticket Price:", booking.ticketPrice);
console.log("Booking Status:", booking.bookingStatus);
console.log("Object Keys:", Object.keys(booking));
const { name, quantity } = booking.movie;

console.log("Movie:", movie.name);
console.log("Quantity:", quantity);
console.log("Total Booking Amount:", booking.calculateTotalAmount());
