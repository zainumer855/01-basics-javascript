"use strict";

const milatExpress = {
  train: "Milat Express",
  code: "ME-",
  booking: [],
  book(trainNum, name) {
    console.log(
      `${name} booked a seat on ${this.train} train ${this.code}${trainNum}`
    );

    this.booking.push({ train: `${this.code}${trainNum}`, name });
  },
};

milatExpress.book(15, "Zain Umer");

const rehmanBaba = {
  train: "Rehman Baba",
  code: "RB-",
  booking: [],
};

const bookTrain = milatExpress.book;

// bookTrain(23, "Ali");
bookTrain.call(rehmanBaba, 23, "Ali");

const demo = [67, "demo"];
bookTrain.apply(rehmanBaba, demo);
// console.log(rehmanBaba);

bookTrain.call(rehmanBaba, ...demo);

const addTax = (fixedRate) => (value) => value + value * fixedRate;

// console.log(addTax(0.1)(250));
const addVAT = addTax(0.2);
console.log(addVAT(100));

const bookRM40 = bookTrain.bind(rehmanBaba, 40);
bookRM40("Azan");
bookRM40("Yusuf");
console.log(rehmanBaba);
