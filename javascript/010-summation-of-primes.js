var _ = require('lodash');

var notDivisibleBy = (p) => {
  return (x) => x % p !== 0;
};

function sieve(N) {
  let primes = [];
  let range = _.range(2,N+1);
  let noChange = 0;
  let oldlength;
  let p;

  while(range.length > 0 && noChange < 10) {
    p = range.shift();
    primes.push(p);
    oldlength = range.length;
    range = _.filter(range, notDivisibleBy(p));
    
    // heuristic: if primes stop getting filtered out, then stop.
    if(oldlength - range.length === 0)
      noChange++; 
  }
  return(primes.concat(range));
}

function theAnswer(N) {
  return sieve(N).reduce((x,y) => x + y, 0);
}

var test = require('tape');

test('sieve', (t) => {
  t.plan(3);
  t.looseEqual(sieve(5), [2,3,5]);
  t.looseEqual(sieve(10), [2,3,5,7]);
  t.looseEqual(sieve(20), [2,3,5,7,11,13,17,19]);
});

test('theAnswer', (t) => {
  t.plan(2);
  t.equal(theAnswer(10), 17);
  t.equal(theAnswer(2000000), 142913828922);
});
