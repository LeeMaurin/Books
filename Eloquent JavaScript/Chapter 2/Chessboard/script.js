// Chessboard
// This is a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// Passing this string to console.log will show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #

let height = 12;
let width = 12;
let checker = '';

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if ((i + j) % 2 == 0) {
      checker += '#';
    } else {
      checker += ' ';
    }
  }
  checker += '\n';
}
console.log(checker);
