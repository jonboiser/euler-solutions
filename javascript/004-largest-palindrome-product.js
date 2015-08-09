function isPalindrome(num) {
  var numStr = num.toString();
  return numStr === numStr.split('').reverse().join('');
}

function theAnswer() {
  var ij;
  var count = 0;
  var maxPal = 0;
  var nextMaxPal = 0;
  loop1:
  for(var i = 999; i > 100; i--) {
    for(var j = i; j > 100; j--) {
      count++;
      ij = i*j;
      if(isPalindrome(ij)) {
        if(ij > maxPal) {
          nextMaxPal = maxPal;
          maxPal = ij;
        } else if(ij < nextMaxPal) {
          return maxPal;
        } else {
          continue loop1;
        }
      }
    }
  }
}

var test = require('tape');

test('isPalindrome', function(t) {
  t.plan(4);
  t.equal(isPalindrome('123321'), true);
  t.equal(isPalindrome('1231321'), true);
  t.equal(isPalindrome('1231329'), false);
  t.equal(isPalindrome('906609'), true);
});

test('theAnswer', function(t) {
  t.plan(1);
  t.equal(theAnswer(), 906609);
});
