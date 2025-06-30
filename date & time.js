// Date & Time Assigments
 
// Q1

function addDaysToDate(inputDate, daysToAdd) {
    let y = new Date(inputDate);
    y.setDate(y.getDate() + daysToAdd);
    console.log(y.toLocaleString()); 
}

addDaysToDate("June 30, 2025 09:17:30", 20);


// Q2.

function subtractDaysFromDate(inputDate, daysToSubtract) {
    let y = new Date(inputDate);                    
    y.setDate(y.getDate() - daysToSubtract);         
    console.log(y.toLocaleString());                 
}

subtractDaysFromDate("June 30, 2025 09:17:30", 15);


// Q3.   calculate your birthday year

let y = new Date();
let myBirthyear = 2001;
let calculateyears = y.getFullYear() - myBirthyear;
console.log("my age is :" + calculateyears);

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



