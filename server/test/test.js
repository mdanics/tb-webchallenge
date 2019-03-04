const expect = require('chai').expect;

const findMedianPrimes = require("../findMedianPrimes");

it('should return [3,5] if n = 10', function(){
      const result = findMedianPrimes.calculate(10);
      expect(result).to.deep.equal([3,5])
});

it('should return [7] if n = 18', function(){
      const result = findMedianPrimes.calculate(18);
      expect(result).to.deep.equal([7])
});

it('should return [7] if n = 18', function(){
      const result = findMedianPrimes.calculate(100);
      expect(result).to.deep.equal([41])
});
