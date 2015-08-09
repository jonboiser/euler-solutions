var _ = require('lodash');

var isPrime = _.memoize(function(N) {
  for(var i = 2; i <= N/2; i++) {
    if (N % i === 0)
      return false;
  }

  return true;
});

function leastPrimeFactor(N) {
  for(var i = 2; i <= N/2; i++) {
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

  return go(N, [1]);
}

exports.factorsOf = factorsOf;

function theAnswer(N) {
  return _.max(factorsOf(N));
}

var testing = !true;
if(testing) {
  var test = require('tape');
  test('isPrime', function(t) {
    t.plan(6);
    t.equal(isPrime(1), true);
    t.equal(isPrime(2), true);
    t.equal(isPrime(3), true);
    t.equal(isPrime(19), true);
    t.equal(isPrime(4), false);
    t.equal(isPrime(10), false);
    t.equal(isPrime(25), false);
  });

  test('largest prime factor', function(t) {
    t.plan(3);
    t.looseEqual([1,5,7,13,29], factorsOf(13195), '13195');
    t.looseEqual([1], factorsOf(1), '1');
    t.looseEqual([1,2,2], factorsOf(4), '4');
  });

  test('the answer', function(t) {
    t.plan(2);
    t.equal(29, theAnswer(13195), '13195');
    t.equal(6857, theAnswer(600851475143), '600851475143');
  });
}
