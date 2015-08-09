var factorsOf = require('./003-largest-prime-factor').factorsOf;
var _ = require('lodash');

function primeFactorize(N) {
  return _.chain(factorsOf(N))
    .groupBy(_.identity)
    .mapValues(prod)
    .value();
}

function prod(arr) {
  return arr.reduce(function(x,y) { return x * y; }, 1);
}

function mergeMaxes(x, y) {
  var merged = x;
  for(var key in y) {
    if(merged[key])
      merged[key] = Math.max(merged[key], y[key]);
    else
      merged[key] = y[key];
  }
  return merged;
}

function theAnswer(nums) {
  var factorizations = _.map(nums, primeFactorize);
  var lcmFactors = _.reduce(factorizations, mergeMaxes, {});
  return prod(_.values(lcmFactors));
}

var test = require('tape');

test('mergeMaxes', function(t) {
  t.plan(1);
  t.looseEqual(mergeMaxes({'1':2,'2':3,'3':3}, {'1':1,'2':4,'4':5}), {'1':2,'2':4,'3':3,'4':5});
}); 

test('theAnswer', function(t) {
  t.plan(2);
  t.equal(theAnswer(_.range(1,11)), 2520);
  t.equal(theAnswer(_.range(1,21)), 232792560);
});

test('primeFactorize', function(t) {
  t.plan(4);
  t.looseEqual(primeFactorize(3), {'3': 3, '1': 1}, 'factorization of 3 = 3');
  t.looseEqual(primeFactorize(4), {'2': 4, '1': 1}, 'factorization of 4 = 2*2');
  t.looseEqual(primeFactorize(20), {'2': 4, '1': 1, '5': 5}, 'factorization of 20 = 2*2*5');
  t.looseEqual(primeFactorize(81), {'3': 81, '1': 1}, 'factorization of 81 = 3*3*3*3');
});
