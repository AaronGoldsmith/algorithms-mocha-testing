var assert = require('assert');
var chai = require('chai');
var should = chai.should();

/*  begin tests */
describe('Array functions', function ()
{
	const numRun = [9,10,11,12];
	describe('returns index of element', function ()
	{
		it('should return the index of the element', function ()
		{
			numRun.indexOf(10).should.equal(1);
			numRun.indexOf(9).should.equal(0);
		});
		it('should return -1 if the element does not exist', function ()
		{
			for(var i = 0;i<9;i++){
				let ind = numRun.indexOf(i);
				ind.should.equal(-1);
				console.log(" "+(i+1)+")  index of " + i + " is " + ind);
			}
			
		});
	})
});
