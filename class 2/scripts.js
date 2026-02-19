//1 - Current time

let current_time = new Date();
let current_hr = current_time.getHours();

if (current_hr >= 5 && current_hr < 12) {
  console.log("Good morning!");
} else if (current_hr >= 12 && current_hr < 17) {
  console.log("Good afternoon!");
} else if (current_hr >= 17 && current_hr < 21) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

//2- Dice until we get a number greater than 3
let rolls = 0;
let dice;

do {
  dice = Math.floor(Math.random() * 6) + 1;
  rolls++;
  console.log("Rolled:", dice);
} while (dice <= 3);

console.log("Loop ran", rolls, "times before rolling a number greater than 3.");

//3- Arrays and finding the bggest number
let numbers = [4, 17, 9, 2, 31, 8];
let biggest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > biggest) {
    biggest = numbers[i];
  }
}

console.log("The biggest number is:", biggest);

//4- Loops: Triangular pattern
let line = "";

for (let i = 1; i <= 4; i++) {
  line += "#";
  console.log(line);
}

//5- Loops: chessboard pattern
let size = 8;

for (let row = 0; row < size; row++) {
  let line = "";

  for (let col = 0; col < size; col++) {
    if ((row + col) % 2 === 0) {
      line += "#";
    } else {
      line += " ";
    }
  }

  console.log(line);
}
