// function countBs counts the capital "B"s in the argument.

function countBs(a) {
  console.log(countChar(a, 'B'));
}



function countChar(string, ca) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ca) {
      count += 1;
    }
  }
  console.log(count);
}

countBs('BBB');
countChar('beancounting', 'n');
