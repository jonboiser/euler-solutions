var _ = require('lodash');

function next(N) {
  if(N % 2 === 0) {
    return N/2;
  } else {
    return 3*N + 1;
  }
}

var collatzLen = _.memoize(function(N) {
  var n = N;
  var acc = 1;
  while(n !== 1) {
    n = next(n);
    acc++;
  }
  return acc;
});

var collatzLens = _.chain(_.range(1,1000000))
  .map(collatzLen)
  .reduce(function(acc, len, idx) {
    if(len > acc.len) {
      return {len: len, num: idx + 1}
    } else {
      return acc;
    }
  }, {len: 0, num: 0}).value();

console.log(collatzLens) // 837799

var test = require('tape');

test('collatzLen', function(t) {
  t.plan(3);
  t.equal(collatzLen(1), 1);
  t.equal(collatzLen(13), 10);
  t.equal(collatzLen(14), 18);
});
