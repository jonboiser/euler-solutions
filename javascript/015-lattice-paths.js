var _ = require('lodash');
var test = require('tape');

function makeKey(x,y) {
  return x.toString() + "_" + y.toString();
}

var gridPaths = _.memoize(function(rows, cols) {
  if(rows === 0 || cols ===0) {
    return 1;
  } else {
    return gridPaths(rows-1, cols) + gridPaths(rows, cols-1);
  }
}, makeKey);

test('gridPaths', function(t) {
  t.plan(5);
  t.equal(gridPaths(0,0), 1);
  t.equal(gridPaths(2,0), 1);
  t.equal(gridPaths(1,1), 2);
  t.equal(gridPaths(2,2), 6);
  t.equal(gridPaths(20,20), 137846528820);
});
