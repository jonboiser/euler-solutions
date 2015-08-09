var factorsOf = require('./003-largest-prime-factor').factorsOf;
var _ = require('lodash');

function primeFactorize(N) {
  return _.chain(factorsOf(N))
    .groupBy(_.identity)
    .mapValues(prod)
    .value();
}

function prod(arr) {
  return arr.reduce(function(x,y) { return x * y }, 1);
}

function theAnswer(nums) {
  return 0;
}

var test = require('tape');

test('theAnswer', function(t) {
  t.plan(2);
  t.equal(theAnswer(_.range(1,11)), 2520);
  t.equal(theAnswer(_.range(1,21)), 2520);
});

test('primeFactorize', function(t) {
  t.plan(3);
  t.looseEqual(primeFactorize(3), {'3': 3, '1': 1})
  t.looseEqual(primeFactorize(20), {'2': 4, '1': 1, '5': 5})
  t.looseEqual(primeFactorize(81), {'3': 81, '1': 1})
});
