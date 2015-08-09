var _ = require('lodash');

function isMultipleOf(n) {
  return function(x) {
    return x % n === 0;
  };
}

function isMultipleOf3Or5(x) {
  return isMultipleOf(3)(x) || isMultipleOf(5)(x);
}

function theAnswer(n) {
  var inputs = _.range(1,n);
  return _.chain(inputs)
    .filter(isMultipleOf3Or5)
    .reduce(function(x, y) {
      return x + y;
    }, 0).value();
}

var testing = !true;
if (testing) {
  var test = require('tape');
  test('Test predicate', function(t) {
    t.plan(2);
    var shouldPass = [3,5,9,12,15,18,20,21,25];
    var shouldNotPass = [1,2,4,7,8,11,13,14,16,17];
    
    t.equal(true, _(shouldPass).reduce(function(acc, x) {
      return acc && isMultipleOf3Or5(x);
    }, true), 'positive cases');
    
    t.equal(false, _(shouldNotPass).reduce(function(acc, x) {
        return acc || isMultipleOf3Or5(x);
      }, false), 'negative cases');
  });

  test('Test answer for small n', function(t) {
    t.plan(3);
    t.equal(3+5, theAnswer(6), '< 6');
    t.equal(3+5+6+9+10+12+15+18, theAnswer(20), '< 20');
    t.equal(233168, theAnswer(1000), '< 1000');
  });
}
