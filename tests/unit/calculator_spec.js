var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  it('it can add 1 to 4', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 5);
  });


  it('it can subtract 4 from 7', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });


  it('it can multiply 3 by 5', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 15)
  });


  it('it can divide 21 by 7', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const actual = calculator.runningTotal;
    assert.strictEqual(actual, 3);
  });

 
  it('it can concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.strictEqual(1234, calculator.runningTotal);
  });

  
  it('it can chain multiple commands together', function(){
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("-")
    calculator.numberClick(1);
    calculator.operatorClick("=");
    assert.strictEqual(2, calculator.runningTotal);
  });


  it('it can clear the running total without affection calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(2);
    calculator.operatorClick("*");
    calculator.numberClick(1);
    calculator.operatorClick("clr");
    calculator.operatorClick("=");
    assert.strictEqual(true, calculator.newTotal);
  });

});
