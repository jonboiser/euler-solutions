var _ = require('lodash')

function theAnswer(n) {
  var triNum, nums, mults;
  var N = Math.floor(n/2);
  var multCount = 0;
  while(multCount < n) {
    N++;
    triNum = N*(N+1)/2;
    nums = _.range(1, Math.sqrt(triNum));
    mults = _.filter(nums, function(x) {
      return triNum % x === 0;
    });
    multCount = 2 * mults.length;  
  }
  return triNum;
}

var test = require('tape');

test('theAnswer', function(t) {
  t.plan(2);
  t.equal(theAnswer(5), 28);
  t.equal(theAnswer(500), 76576500);
});
