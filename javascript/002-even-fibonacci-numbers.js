var _ = require('lodash');
var isEven = require('./001-multiples-of-3-and-5').isMultipleOf(2);
var testing = !true;

fibonacci = _.memoize(function(n) {
  if(n <= 2) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
});

function theAnswer(max) {
  var i = 1, total = 0, current;
  current = fibonacci(i);
  
  while(current < max) {
    total += isEven(current) && current
    current = fibonacci(i++);
  }

  return total;
}

if (testing) {
  var tap = require('tap');

  tap.test('fibonacci numbers', function(t) {
    var answers = [1,2,3,5,8,13,21,34,55,89,144];
    t.similar(answers, _.range(1,answers.length+1)
      .map(fibonacci), 'first 10 fibonacci numbers.');
    
    tap.test('answer', function(t) {
      t.equal(44, theAnswer(80), 'less than 80');
      t.equal(188, theAnswer(150), 'less than 150');
      t.equal(4613732, theAnswer(4000000), 'the answer')
    });
  });
}
