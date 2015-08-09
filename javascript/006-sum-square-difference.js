var _ = require('lodash');

function sumSquaresN(N) {
  return _.chain(_.range(1,N+1))
    .map(function(x) { return x * x; })
    .reduce(function(x, y) {
      return x + y;
    }, 0).value();
}

function squareSumsN(N) {
  var sum = _.reduce(_.range(1,N+1), function(x, y) {
    return x + y; }, 0);
  return sum * sum;
}

function squareSumsNExact(N) {
  var sum = N*(N+1)/2;
  return sum * sum;
}

function sumSquaresNExact(N) {
  return N*(N+1)*(2*N+1)/6;
}

function theAnswer(N) {
  return squareSumsNExact(N) - sumSquaresNExact(N);
}

var test = require('tape');

test('sumSquaresN', function(t) {
  t.plan(2);
  t.equal(sumSquaresN(10), 385);
  t.equal(sumSquaresNExact(10), 385);
});

test('squareSumsN', function(t) {
  t.plan(2);
  t.equal(squareSumsN(10), 3025);
  t.equal(squareSumsNExact(10), 3025);
});

test('theAnswer', function(t) {
  t.plan(2);
  t.equal(theAnswer(10), 2640);
  t.equal(theAnswer(100), 25164150);
});
