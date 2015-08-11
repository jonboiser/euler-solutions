var fs = require('fs');
var _ = require('lodash');

var numberStrings = fs.readFileSync('./013-data.txt').toString().split("\n");

/* 
  Because there are only 100 numbers, decimal places 1-37 aren't
  relevant to the answer. So we can truncate at the 11th digit 
  and sum those smaller numbers.
     xxxxxxxxxxxxx <- first 13 digits of 50 digit number
  oooxxxxxxxxxx   ... - sum of 100 numbers adds up to 3 more decimal places.
*/
var sum = _.chain(numberStrings)
  .map(function(x) {
    return +x.substring(0,13);
  })
  .reduce(function(res, x) {
    return res + x;
  }, 0).value();
console.log(sum); // 553737623039036 (no exponent)
console.log(sum.toString().substring(0,10)); // 5537376230
