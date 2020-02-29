const divide = require('../index');
const sort = require('../index');
const chai = require('chai');
const expect = chai.expect;
//or combine lines 2 and 3 => const expect = require('chai').expect;

describe('Divide function', () => {

    it('should divide positive integers correctly', () => {
        //define inputs
        const a = 8;
        const b = 4;
        const expectedAnswer = 2;

        //invoke the function
        const actualAnswer = divide(a, b);

        //assert that expected === actual
        expect(actualAnswer).to.equal(expectedAnswer);
    });

    it('should divide negative numbers correctly', () => {
        const a = -6, b = 3, expectedAnswer = -2;

        const actualAnswer = divide(a, b);

        expect(actualAnswer).to.equal(expectedAnswer);
    });

    it('should throw an error when dividing by zero', () => {
        const a = 8, b = 0;

        const fn = () => {
            divide(a, b)
        };

        expect(fn).to.throw();
    });

    it('should divide negative integers correctly', () => {
        const a = 6, b = -2, expectedAnswer = -3;

        const actualAnswer = divide(a, b);
        
        expect(actualAnswer).to.equal(expectedAnswer);
    });
});

/*
Shorter syntax
===========================================================

const expect = require('chai').expect;
const divide = require('../index');

describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    expect(() => { divide(8, 0) }).to.throw();
  });
});
*/

describe('Sort function', () => {
    it('should sort the array in ascending order', () => {
        var list = [8, 7, 10, 4], expectedAnswer = [4, 7, 8, 10];

         list.sort(function(a, b){
             return a-b;
         })

        expect(list).to.deep.equal(expectedAnswer);
    });

    it('should throw an error if it contains any string values', () => {
        var list = [8, 7, "e", 4];

        const fn = () => {
            return list.sort(function(a, b){
             return a-b;
         })
        };

        expect(fn).to.throw();
    });
});

/*

describe('.equal asserts using === //strictly equals', () => {
    it('shows how === behaves with various inputs', () => {
        expect(2).to.equal(2, '2 === 2'); // pass
        //expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
        //expect(2).to.equal(3, '2 === 3'); // fail, wrong values
        //expect('hen').to.equal('Hen', "'hen' == 'Hen'"); // fail, string comparison is case sensitive

    });
});

*/