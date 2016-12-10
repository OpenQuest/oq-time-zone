'use strict';

var mocha = require('mocha');
var chai = require('chai');
var timeZone = require('./index.js');

var expect = chai.expect;

describe('Time Zone', function() {

    it('should export a function', function() {
        expect(timeZone).to.be.a('function');
    });

    it('should get +8 when localtime is in BeiJing', function() {
        expect(timeZone()).to.equal('+8');
    });

    it('should get +6:30 when localtime is in Burma', function() {
        expect(timeZone()).to.equal('+6:30');
    });

    it('should get +1 when localtime is in Norway but not daylight-saving time', function() {
        expect(timeZone()).to.equal('+1');
    });

    it('should get +2 when localtime is in Norway and in daylight-saving time', function() {
        expect(timeZone(new Date(2016, 5, 1))).to.equal('+2');
    });

    it('should get 0 when localtime is in England', function() {
        expect(timeZone()).to.equal('0');
    });

    it('should get right formatted string', function() {
        expect(timeZone()).to.match(/^[+-]?[\d:]+$/);
    });
});