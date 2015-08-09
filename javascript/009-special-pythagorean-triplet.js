function theAnswer(N) {
  var c;
  for(var a = 1; a < N/3; a++) {
    for(var b = a + 1; b < (N-a)/2; b++) {
      c = N - a - b;
      if(c*c === a*a + b*b)
        return a*b*c;
    }
  }
}

var test = require('tape');

test('theAnswer', function(t) {
  t.plan(1);
  t.equal(theAnswer(1000), 31875000);
});
