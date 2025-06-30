// Date & Time Assigments
 
// Q1

function date(){
let y = new Date("june 30 , 2025 9:17:30");
y.setDate(y.getDate() + 20);
console.log(y);
}
date();

// Q2.

function time(){
let y = new Date("june 30 , 2025 9:17:30");
y.setDate(y.getDate() - 20);
console.log(y);
}
time();

// Q3.   calculate your birthday year

let y = new Date();
let myBirthyear = 2001;
let calculateyears = y.getFullYear() - myBirthyear;
console.log(calculateyears);

// Q4.

let user = prompt("Enter today's day name:");
let weekends = ["Saturday", "Sunday"];

let today = new Date();
let getDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(today);

if (weekends.includes(getDay)) {
  console.log("Today is weekend");
} else {
  console.log("Today is not weekend");
}

console.log("Today is:", getDay);

// Q5.

function getDaysPassedThisYear() {
  let today = new Date();
  let start = new Date(today.getFullYear(), 0, 1); 
  let diff = today - start;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log("Days passed this year:", days);
}

getDaysPassedThisYear();


// Q6.

function getTimestamp() {
  let a = new Date("June 30, 2025 09:17:30");
  let timeInS = a.getTime();
  console.log("Timestamp:", timeInS);
}

getTimestamp();



