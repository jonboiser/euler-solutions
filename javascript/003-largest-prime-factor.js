var _ = require('lodash');

var isPrime = _.memoize(function(N) {
  for(var i = 2; i < N/2; i++) {
    if (N % i === 0)
      return false;
  }

  return true;
});

function leastPrimeFactor(N) {
  for(var i = 2; i < N/2; i++) {
    if (isPrime(i) && (N % i === 0))
      return i;
  }

  return N;
}

function factorsOf(N) {
  var go = function(M, facs) {
    var p;
    if(M === 1) {
      return facs;
    } else {
      p = leastPrimeFactor(M);
      return go(M/p, facs.concat(p));
    }
  };

  return go(N, []);
}

function theAnswer(N) {
  return _.max(factorsOf(N));
}

var testing = !true;
if(testing) {
  var test = require('tape');
  test('largest prime factor', function(t) {
    t.plan(1);
    t.looseEqual([5,7,13,29], factorsOf(13195), '13195');
  });

  test('the answer', function(t) {
    t.plan(2);
    t.equal(29, theAnswer(13195), '13195');
    t.equal(6857, theAnswer(600851475143), '600851475143');
  });
}
