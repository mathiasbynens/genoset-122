var isLikelyToGoBald = require('../index.js');
var assert = require('assert');
require('mocha');

describe('genoset-122', function() {
	it('should match male genomes that fulfill the criteria', function() {
		assert.equal(isLikelyToGoBald(require('./fixtures/male-1.json')), true);
		assert.equal(isLikelyToGoBald(require('./fixtures/male-2.json')), true);
	});
	it('should not match a male genome that doesn’t fulfill the criteria', function() {
		assert.equal(isLikelyToGoBald(require('./fixtures/male-3.json')), false);
		assert.equal(isLikelyToGoBald(require('./fixtures/male-4.json')), false);
	});
	it('should not match a female genome, even if it fulfills all other criteria', function() {
		assert.equal(isLikelyToGoBald(require('./fixtures/female-1.json')), false);
		assert.equal(isLikelyToGoBald(require('./fixtures/female-2.json')), false);
	});
});
