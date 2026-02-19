// pattern generator
// fyi: i used chatgpt as an aid


// generic grid function
function drawGrid(rows, cols, callback) {
  for (let r = 0; r < rows; r++) {
    let line = "";
    for (let c = 0; c < cols; c++) {
      line += callback(r, c);
    }
    console.log(line);
  }
}


function chessCell(row, col) {
  return (row + col) % 2 === 0 ? "#" : " ";
}

drawGrid(8, 8, chessCell);

console.log("");


// triangle generator
function makeTriangle(rows = 5, pattern = "#") {
  for (let i = 1; i <= rows; i++) {
    console.log(pattern.repeat(i));
  }
}

makeTriangle(4);
makeTriangle(6, "$");

console.log("");


// offset triangle
function makeOffsetTriangle(rows = 6, pattern = "#") {
  for (let i = rows; i > 0; i--) {
    console.log(" ".repeat(rows - i) + pattern.repeat(i));
  }
}

makeOffsetTriangle(7, "@");

console.log("");


// random noise
function noise() {
  return Math.random() > 0.5 ? "#" : " ";
}

drawGrid(6, 20, noise);

console.log("");


// diagonal pattern
function diagonal(row, col) {
  return row === col ? "x" : ".";
}

drawGrid(10, 10, diagonal);
