const test = require('node:test');
const assert = require('node:assert');
const { arrayFirst, arrayNext, arrayUnique } = require('../out');

test('synchronous passing test', (t) => {
	// This test passes because it does not throw an exception.
	assert.strictEqual(1, 1);
	assert.strictEqual(arrayFirst(['1','2','3','4','5']),'1');
	assert.strictEqual(arrayNext(['1','2','3','4','5']),'2');
	assert.strictEqual(arrayUnique(['1','2','3','3','2']).join(''),'123');
});