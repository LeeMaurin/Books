// This program performs a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let sum = '';
for (var i = 0; i < 7; i++) {
  sum = sum + '#';
  console.log(sum);
}
