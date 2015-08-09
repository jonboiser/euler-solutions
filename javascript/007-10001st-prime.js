var _ = require('lodash');

function nthPrimeApprox(N) {
  return Math.log(N) * N;
}

var isPrime = _.memoize(function(N) {
  for(var i = 2; i <= N/2; i++) {
    if (N % i === 0)
      return false;
  }

  return true;
});

// Brute force
function theAnswer(N) {
  var count = 0;
  var n = 2;
  var currentPrime;
  while(count < N) {
    if(isPrime(n)) {
      count++;
      currentPrime = n;
    }
    n++;
  }
  return currentPrime;
}

var test = require('tape');
test('theAnswer', function(t) {
  t.plan(1);
  t.equal(theAnswer(10001), 104743);
});
