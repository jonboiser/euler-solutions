var _ = require('lodash');

function sieve(N) {
  var primes = [];
  var range = _.range(2,N+1);
  var delta0 = 0;
  var oldlength;
  var notDivisibleBy = function(p) {
    return function(x) {
      return x % p !== 0;
    };
  };

  while(range.length > 0 && delta0 < 10) {
    p = range.shift();
    primes.push(p);
    oldlength = range.length;
    range = _.filter(range, notDivisibleBy(p));
    
    // heuristic: if primes stop getting filtered out, then stop.
    if(oldlength - range.length === 0)
      delta0++; 
  }
  return(primes.concat(range));
}

function theAnswer(N) {
  return sieve(N).reduce(function(x,y) {
    return x + y;
  }, 0);
}

var test = require('tape');

test('sieve', function(t) {
  t.plan(3);
  t.looseEqual(sieve(5), [2,3,5]);
  t.looseEqual(sieve(10), [2,3,5,7]);
  t.looseEqual(sieve(20), [2,3,5,7,11,13,17,19]);
});

test('theAnswer', function(t) {
  t.plan(2);
  t.equal(theAnswer(10), 17);
  t.equal(theAnswer(2000000), 142913828922);
});
